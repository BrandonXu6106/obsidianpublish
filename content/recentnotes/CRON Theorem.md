---
title: "CRON Theorem"
date: 2022-08-12
tags:
  - seed
---

> Causality Required Only for Non-monotonicity (CRON).

Eventual consistency can be *guaranteed* in any program by protecting non-monotonic statements (“points of order”) with consensus protocols

Rephrased: Program semantics require [[causality|causal]] [[causality|message ordering]] if and only if the messages participate in non-monotonic derivations (e.g. set removal)

See also: [[CALM Theorem|CALM Theorem]]
