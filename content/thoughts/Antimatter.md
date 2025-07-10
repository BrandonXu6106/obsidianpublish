---
title: "Antimatter"
date: 2023-02-05
tags:
  - seed
---

[Source](https://braid.org/antimatter)

A [[CRDT.md|CRDT]] + [[Operational Transform|OT](Operational%20Transform.md) text editing algorithm with history pruning (read: GC). Permissionless [[system model](system%20model.md).

## Components

- Acknowledgements: require all peers to have acknowledged up to a certain point, then we can bloop
- Blooping: collapsing history. This is kind of like span-merging which [[Yjs.md]] implements
  - When we get acknowledgement from all peers up to a certain point, we can then 'bloop'/flatten all history that is not used in producing the current state
  - ![[images/antimatter-bloop.png|400]]
- Fissures: keeps track of disconnections and network partitions
  - During a fissure/disconnect, all events concurrent with that disconnect are marked to prevent from being blooped
