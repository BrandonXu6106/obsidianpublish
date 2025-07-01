---
title: "Merkle-DAG"
date: 2022-07-14
tags:
  - seed
---

A directed acyclic graph where nodes correspond to versions of the content and edges correspond to changes (diffs).

Each node has an identifier which is the result of hashing the node's content.

Merkle DAG nodes are *immutable*. Any change in a node would alter its identifier and thus affect all the ascendants in the DAG, essentially creating a different DAG

Examples of DAGs include:

- [[git|git]]
- [[IPFS|IPFS]]
- [[docker|Docker]] images
