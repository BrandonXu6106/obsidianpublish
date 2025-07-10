---
title: "SBFT"
date: 2022-08-09
tags:
  - seed
---

A [[Byzantine Faults|Byzantine fault-tolerant](Byzantine%20Faults.md) [[State Machine Replication (SMR)|state machine replication](State%20Machine%20Replication%20(SMR).md) system that improves upon the scalability of [[PBFT.md|PBFT]].

To achieve this performance improvement, SBFT uses a combination of four ingredients: using collectors and threshold [[digital signatures|signatures](digital%20signatures.md) to reduce communication to linear, using an optimistic fast path, reducing client communication and utilizing redundant servers for the fast path
