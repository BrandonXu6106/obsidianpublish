---
title: "Secure Scuttlebutt (SSB)"
date: 2022-08-11
tags:
  - seed
aliases:
  - SSB
---

## SSB

Secure Scuttlebutt is a database protocol for unforgeable (read: [[digital signatures|digitally signed](digital%20signatures.md)) append-only message feeds.

## Scuttlebot

Scuttlebot forms a global cryptographic social network with its peers. Each user is identified by a public key, and publishes a log of signed messages, which other users follow socially.

### Identity

Web-of-Trust style (see: [[Public-key Infrastructure#PGP|PGP](Public-key%20Infrastructure.md)). There is no global registry of usernames. Instead, users name themselves, and share [[petname.md|petnames]] for each other.

Identities are Ed25519 key pairs.

### Pub Servers

To get over the data availability problem and because Scuttlebot has no [[DHT.md]] or NAT-traversal utilities, users must "join" a Pub to distribute their messages on the WAN.

Pubs are bots that follow users and rehost the messages to other peers, ensuring good uptime and no firewall blockage.

## Secret Handshake

An encrypted channel protocol based on a mutually authenticating key agreement handshake, with forward secure identity metadata. It's used by Scuttlebot to authenticate and encrypt peer connections.
