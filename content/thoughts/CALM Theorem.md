---
title: "CALM Theorem"
date: 2022-08-12
tags:
  - seed
---

> Consistency As Logical Monotonicity

Logically monotonic distributed code is [[consistency.md|eventually consistent]] without any need for [[consensus.md|consensus]] protocols (distributed locks, [[Two-phase commit|two-phase commit](Two-phase%20commit.md), etc.)

See also: [[CRON Theorem|CRON Theorem](CRON%20Theorem.md), [[I-Confluence.md]]

Logically monotonic state is something that can be represented using a join [[semilattice.md|semi-lattice]].

Basically, avoid coordination where possible. It’s the dominant term in the [[Universal Scaling Law](Universal%20Scaling%20Law.md).

## Monotonicity and Datalog

Monotonic properties arise from things in the form of a $\exists$ question (the presence of one positive example gives us an answer in the affirmative and additional positive examples don’t change that fact). Non-monotonic properties arise from things in the form of a $\forall$ question (can only answer a question like that once we’ve looked at every example). Example of the later also include $! \exists$, the negation property.

What we’ve learned from these examples is that negation and universal quantification mess with monotonicity. Thus, we can also express CALM in terms of a programming language like [[Datalog.md|Datalog]]:

> A program has an eventually consistent, coordination-free execution strategy if and only if it is expressible in (monotonic) Datalog.

In fact, this is what Bloom is based off-of. Bloom is underpinned by a programming language called Dedalus which is a Datalog variant that cleanly captures what we see as the salient semantic issues for parallel and distributed computing
