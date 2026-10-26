---
title: NetWorthAI
summary: A personal-finance assistant with a language interface and deterministic calculations.
category: AI experiment
status: Prototype
number: "04"
tags: [Python, Agent design, Auditability]
order: 4
outcome: A prototype that separates conversational interaction from calculations and records changes through audit events.
draft: false
---

## The question

How can an assistant make structured information easier to work with while keeping calculations and state changes predictable?

NetWorthAI explores that question in a personal-finance setting. The prototype focuses on how language interaction, structured data, and calculation fit together.

## Engineering choices

The application combines portfolio tracking with a deterministic finance agent. It calculates assets, liabilities, and net worth, records snapshots, and appends audit events.

Market-data refreshes use provider fallbacks. When a refresh fails, the system can retain the previous value instead of silently replacing it with an invalid result.

## The central design choice

The language model provides the interaction layer. Calculations and state transitions remain explicit, deterministic operations.

That boundary creates two distinct things to examine: whether the assistant interpreted the request correctly, and whether the underlying operation behaved correctly.

## The result

The prototype implements the separation between language and calculation, along with snapshots and audit events. The focus so far has been the architecture and traceability of the assistant's operations.

## Product and operational tradeoffs

A familiar language interface can reduce the need to navigate separate financial operations. The product still needs to expose what an operation will change and leave a record afterward.

Provider fallbacks address a different concern: an unavailable data feed should not silently turn an existing value into zero. Retained data needs a clear freshness status so availability does not disguise staleness.

This remains a personal prototype. I have not established external adoption, investment outcomes, or measured time savings. The useful result so far is an inspectable boundary between interpretation, calculation, and persistent state.

## What I am taking forward

An assistant's usefulness depends partly on the operations it can perform, and partly on how clearly a person can inspect what happened.
