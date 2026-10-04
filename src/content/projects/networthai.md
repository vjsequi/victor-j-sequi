---
title: NetWorthAI
summary: A personal-finance assistant with a language interface and deterministic calculations.
category: AI experiment
status: Prototype
number: "02"
tags: [Python, Agent design, Auditability]
order: 2
outcome: A prototype that separates conversational interaction from calculations and records changes through audit events.
draft: false
---

## The question

How can an assistant make structured information easier to work with while keeping calculations and state changes predictable?

NetWorthAI explores that question in a personal-finance setting. The prototype focuses on how language interaction, structured data, and calculation fit together.

## What I built

The application combines portfolio tracking with a deterministic finance agent. It calculates assets, liabilities, and net worth, records snapshots, and appends audit events.

Market-data refreshes use provider fallbacks. When a refresh fails, the system can retain the previous value instead of silently replacing it with an invalid result.

## The central design choice

The language model provides the interaction layer. Calculations and state transitions remain explicit, deterministic operations.

That boundary creates two distinct things to examine: whether the assistant interpreted the request correctly, and whether the underlying operation behaved correctly.

## The result

The prototype implements the separation between language and calculation, along with snapshots and audit events. The focus so far has been the architecture and traceability of the assistant's operations.

## What I am taking forward

An assistant's usefulness depends partly on the operations it can perform, and partly on how clearly a person can inspect what happened.
