---
title: "OrbitDB"
date: 2022-08-11
tags:
  - seed
---

OrbitDB is a distributed, [[peer-to-peer.md|peer-to-peer]] database with [[IPFS.md|IPFS]] as its data storage and [IPFS Pubsub](https://github.com/ipfs/go-ipfs/blob/master/core/commands/pubsub.go#L23) to automatically sync databases with peers. Provides eventual consistency with [[CRDT.md|CRDTs]] for conflict-free merges.
