---
title: "Replication"
date: 2022-05-05
tags:
  - seed
---

> A node that has a copy of the data is called a _replica_

Replication is the act of ensuring [[consistency.md|consistency]] of data across replicas. If one replica is faulty, others are ideally still accessible

Of course, if data doesn't change, this is an easy problem: just copy it. Hard problem is when the data changes.

Can take inspiration from hardware systems! RAID (Redundant Array of Independent Disks) which is used to replicate within a single computer fills a similar role but RAID has a single controlled whereas distributed systems have nodes that act independently.

An important concept in replication (and [[message broadcast|message broadcast](message%20broadcast.md)) is making sure that we avoid cases where losing an ACK could lead to users doing an action multiple times (e.g. pressing the like button)?

This can be done by ensuring [[idempotence.md|idempotence]] in our actions.

## SMR

[[State Machine Replication (SMR)|State machine replication](State%20Machine%20Replication%20(SMR).md)cCan be done by FIFO-[[message broadcast#Total order broadcast|total order broadcasting](message%20broadcast.md) every update to all replicas. Whenever a replica delivers an update message, it applies it to its own state

This is what underlies a lot of [[blockchain.md|blockchains]], distributed ledgers, smart contracts, etc. ([[ethereum.md|Ethereum]] is just one big state machine)
