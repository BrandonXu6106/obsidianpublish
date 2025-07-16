export function registerEscapeHandler(outsideContainer: HTMLElement | null, cb: () => void) {
  if (!outsideContainer) return
  function click(this: HTMLElement, e: HTMLElementEventMap["click"]) {
    if (e.target !== this) return
    e.preventDefault()
    e.stopPropagation()
    cb()
  }

  function esc(e: HTMLElementEventMap["keydown"]) {
    if (!e.key.startsWith("Esc")) return
    e.preventDefault()
    cb()
  }

  outsideContainer?.addEventListener("click", click)
  window.addCleanup(() => outsideContainer?.removeEventListener("click", click))
  document.addEventListener("keydown", esc)
  window.addCleanup(() => document.removeEventListener("keydown", esc))
}

export function removeAllChildren(node: HTMLElement) {
  while (node.firstChild) {
    node.removeChild(node.firstChild)
  }
}

// AliasRedirect emits HTML redirects which also have the link[rel="canonical"]
// containing the URL it's redirecting to.
// Extracting it here with regex is _probably_ faster than parsing the entire HTML
// with a DOMParser effectively twice (here and later in the SPA code), even if
// way less robust - we only care about our own generated redirects after all.
const canonicalRegex = /<link rel="canonical" href="([^"]*)">/

export async function fetchCanonical(url: URL): Promise<Response> {
  const res = await fetch(`${url}`)
  if (!res.headers.get("content-type")?.startsWith("text/html")) {
    return res
  }

  // reading the body can only be done once, so we need to clone the response
  // to allow the caller to read it if it's was not a redirect
  const text = await res.clone().text()
  const [_, redirect] = text.match(canonicalRegex) ?? []
  return redirect ? fetch(`${new URL(redirect, url)}`) : res
}


declare global {
  interface Window {
    scriptPromiseMap: Map<string, Promise<void>>;
  }
}
if (!window.scriptPromiseMap) {
  window.scriptPromiseMap = new Map();
}

export function loadScript(url: string, preserve = true) {
  let resolve: (value: void) => void = () => { };
  let reject: (reason?: any) => void = () => { };
  const promise = new Promise<void>((_resolve, _reject) => {
    resolve = _resolve;
    reject = _reject;
  });
  if (!url) {
    reject?.(new Error('URL is required'));
    return promise
  }
  if (window.scriptPromiseMap.get(url) && preserve) {
    return window.scriptPromiseMap.get(url) || Promise.resolve();
  }
  const script = document.createElement('script');
  script.src = url;
  script.async = true;
  if (preserve) {
    script.setAttribute('spa-preserve', 'true');
  }
  script.onload = () => {
    resolve();
  };
  script.onerror = () => {
    reject(new Error(`Failed to load script: ${url}`));
  };
  document.head.appendChild(script);
  if (preserve) {
    window.scriptPromiseMap.set(url, promise);
  }
  return promise
}


// Excalidraw
type ExcalidrawElement = any;
type ExcalidrawProps = {
  width?: string;
  height?: string;
};
declare global {
  interface Window {
    QuartzExcalidrawPlugin: {
      mountApp(element: HTMLElement, initialData: readonly ExcalidrawElement[] | null, options: ExcalidrawProps): void
      decodeData(data: string): ExcalidrawElement[];
    };
  }
}
export function getJsByMeta(name: string) {
  const pluginPath = document.querySelector(`meta[name="${name}"]`)?.getAttribute('content');
  if (!pluginPath) {
    throw new Error('Excalidraw plugin path not found');
  }
  return pluginPath;
}
async function loadExcalidraw(element: HTMLElement) {
  const data = element.getAttribute('data-excalidraw') ?? '';
  element.removeAttribute('data-excalidraw');
  const markdown = await fetch(data).then((res) => res.text());
  window.QuartzExcalidrawPlugin.mountApp(element as HTMLElement, window.QuartzExcalidrawPlugin.decodeData(markdown), {});
}
export async function initExcalidraw() {
  await new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 100);
  })
  const hasExcalidraw = document.querySelector('[data-excalidraw]');
  if (!hasExcalidraw) {
    return;
  }
  const pluginPath = getJsByMeta('excalidraw-plugin');
  await loadScript(pluginPath, false);
  const elements = document.querySelectorAll('[data-excalidraw]');
  if (!elements || !elements.length) {
    return;
  }
  elements.forEach((element) => {
    loadExcalidraw(element as HTMLElement);
  });
}