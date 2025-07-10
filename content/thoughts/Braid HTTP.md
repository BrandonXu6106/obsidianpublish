---
title: "Braid HTTP"
date: 2022-08-11
tags:
  - seed
---

Braid's goal is to extend [[HTTP.md|HTTP]] from a state transfer protocol to a state sync protocol, in order to do away with custom sync protocols and make state across the web more [[interoperability.md|interoperable]].

Braid puts the power of operational transforms and [[CRDT.md|CRDTs]] on the web, improving network performance and enabling natively [[peer-to-peer.md|p2p]], collaboratively-editable, [[local-first software|local-first](local-first%20software.md) web applications.

It turns out that HTTP is very close to being a HTSP, we just need to add 5 headers to requests and responses as well as a new status code `209 Subscription`.

From the [IETF Internet Draft](https://raw.githubusercontent.com/braid-work/braid-spec/master/draft-toomim-httpbis-braid-http-03.txt)
