---
title: "FLP Result"
date: 2022-07-01
tags:
  - seed
---

Consensus in distributed systems **cannot be asynchronous** due to the FLP Result: there is no deterministic consensus algorithm that is guaranteed to terminate in an asynchronous crash-stop [[system model|system model](system%20model.md)

This holds even if $f = 1$

Similar to tradeoffs made in the [[CAP Theorem|CAP Theorem](CAP%20Theorem.md), when under attack, we need to choose between

- [[safety.md|safety]]
- [[consistency.md]]
- [[liveness.md|liveness]]/availability

This can somewhat be abated by randomized protocols (see: [[HoneyBadgerBFT.md|HoneyBadgerBFT]], [[longest-chain consensus|Nakamoto consensus](longest-chain%20consensus.md))
