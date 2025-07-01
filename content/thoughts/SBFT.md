---
title: "SBFT"
date: 2022-08-09
tags:
  - seed
---

A [[Byzantine Faults|Byzantine fault-tolerant]] [[State Machine Replication (SMR)|state machine replication]] system that improves upon the scalability of [[PBFT|PBFT]].

To achieve this performance improvement, SBFT uses a combination of four ingredients: using collectors and threshold [[digital signatures|signatures]] to reduce communication to linear, using an optimistic fast path, reducing client communication and utilizing redundant servers for the fast path
