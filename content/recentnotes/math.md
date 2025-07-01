---
title: "Math"
date: 2022-07-05
tags:
  - seed
---

Three pillars of Math

1. Definitions: so you know what you're talking about, the communicate ideas to others, [[boundary object|boundary object]]. In [[distributed systems|distributed systems]] talks especially, disagreements over tech are actually just disguised disagreements over definitions (e.g. on what [[decentralization|decentralization]] means, see also [[new-words|word meaning]] and [[semantics|semantics]])
2. Theorems
   1. Possibility results (e.g. protocols like [[Raft Consensus Algorithm|Raft]] or [[Tendermint|Tendermint]]) articulate assumptions under which solution has desired properties
   2. Impossibility results (e.g. [[PSL-FLM Impossibility Result|PSL-FLM]] and [[FLP Result|FLP]] results) tell you to avoid wasting time trying to design something that cannot exist
3. Proofs: arguments of why we know these theorems are actually true statements
   1. Can guide you to what the solution might look like (specifically, in the realm of possibility results)
   2. Can help you asses whether changes to the solution void the properties it originally had
