import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { SimpleSlug } from "./quartz/util/path"

const recentNotes = [
  Component.RecentNotes({
    title: "Design Notes",
    limit: 5,
    filter: (f) =>
      f.slug!.startsWith("designnotes/") && f.slug! !== "designnotes/index" && !f.frontmatter?.noindex,
    linkToMore: "designnotes/" as SimpleSlug,
  }),
  Component.RecentNotes({
    title: "Recent Notes",
    limit: 4,
    filter: (f) => f.slug!.startsWith("recentnotes/"),
    linkToMore: "recentnotes/" as SimpleSlug,
  }),
]

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.Comments({
      provider: 'giscus',
      options: {
        // from data-repo
        repo: 'arioxu/obsidianpublish',
        // from data-repo-id
        repoId: 'R_kgDOPEzm2g',
        // from data-category
        category: 'Announcements',
        // from data-category-id
        categoryId: 'DIC_kwDOPEzm2s4CsTR0',
        // from data-lang
      }
    }),
    ...recentNotes.map((c) => Component.MobileOnly(c))],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/ArioXu",
      Twitter: "https://x.com/ArioXu52756",
    },
  }),
}

const left = [
  Component.PageTitle(),
  Component.MobileOnly(Component.Spacer()),
  Component.Flex({
    components: [
      {
        Component: Component.Search(),
        grow: true,
      },
      { Component: Component.Darkmode() },
    ],
  }),
  ...recentNotes.map((c) => Component.DesktopOnly(c)),
]

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle(), Component.ContentMeta(), Component.TagList()],
  left,
  right: [
    Component.Graph({
      localGraph: {
        showTags: false,
      },
      globalGraph: {
        showTags: false,
      },
    }),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle(), Component.ContentMeta()],
  left,
  right: [],
}
