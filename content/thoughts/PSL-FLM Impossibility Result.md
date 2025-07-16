---
title: "PSL-FLM Impossibility Result"
date: 2022-07-01
tags:
  - seed
---

[[Byzantine Broadcast|Byzantine Broadcast](Byzantine%20Broadcast.md) is impossible in the synchronous [[system model|system model](system%20model.md) if you have too many byzantine nodes (for $f \geq \frac n 3$).

Vague intuition for the result, imagine 3 nodes A (Byzantine), B (honest), and C (Byzantine)

1. Node A is the sender
2. A could tell B + C conflicting things
3. B + C can compare histories but C can try to frame A
4. B can't distinguish which of A or C are responsible for conflict

This result **breaks down** in the presence of [[Public-key Infrastructure|PKI](Public-key%20Infrastructure.md) (you can't forge signatures from other nodes!!)

- Thus, with PKI we get [[Byzantine Broadcast|BB](Byzantine%20Broadcast.md) for all $f$
- Without PKI, we get [[Byzantine Broadcast|BB](Byzantine%20Broadcast.md) only if $f < \frac n 3$
