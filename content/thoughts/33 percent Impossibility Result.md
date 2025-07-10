---
title: "33% Impossibility Result"
date: 2022-07-03
tags:
  - seed
---

In general (assuming a partially-synchronous [[system model|system model](system%20model.md)), a protocol can achieve [[safety.md|safety]] all the time and additionally [[liveness.md|liveness]] in synchronous conditions _if and only if_ $n \geq 3f + 1$ (equivalently, $f < \frac n 3$)

This result holds despite the assumption of [[Public-key Infrastructure|PKI](Public-key%20Infrastructure.md) (unlike the [[PSL-FLM Impossibility Result|PSL-FLM result](PSL-FLM%20Impossibility%20Result.md)), so this bound must be driven by the possibility of unbounded message delays.

Intuition:

1. We can't wait indefinitely for all nodes to respond (one valid strategy for [[Byzantine Faults|Byzantine](Byzantine%20Faults.md) nodes is to never respond, even after GST) so realistically we can only wait to hear from $n - f$ nodes before deciding on the next possible action
2. But we can't say for certain the $f$ nodes are actually Byzantine (they could be honest nodes that are congested), thus of the $n - f$ nodes, more than half should be honest, $f < \frac 1 2 (n -f)$ or equivalently $f < \frac n 3$
