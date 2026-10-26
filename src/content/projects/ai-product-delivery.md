---
title: AI Product Delivery
summary: A local workbench exploring persistent requirements, delivery evidence, and the cost of agent coordination.
category: Delivery tooling
status: Prototype
number: "03"
tags: [Product discovery, Delivery systems, Observability]
order: 3
outcome: "A first local discovery slice: a macOS workbench, API, and CLI sharing persisted briefs, questions, and bounded workspace inspection."
draft: false
---

## The delivery problem

Agent-assisted projects can accumulate decisions, requirements, and verification records across conversations. Returning to the work should not require reconstructing why a decision was made or whether a claimed result was checked.

This project explores a product-delivery workbench that retains the goal, relevant evidence, unresolved decisions, and next useful action. The intended benefit is clearer delivery with less total human effort. That benefit is still a hypothesis.

## Product direction

My focus is defining useful end-to-end journeys, the amount of structure each needs, and the evidence that would justify the next increment. The first implemented slice is deliberately narrow: describe a goal, inspect a permitted sample workspace, answer consequential questions, and save a brief that can be resumed.

The wider design includes implementation, collaboration, release, and operation. Those capabilities are roadmap work, not delivered features of the current discovery prototype.

## Engineering and operation

A native macOS interface, API, and CLI share a Python/FastAPI service and SQLite state. Persisted records live beyond a single client session. Workspace inspection is bounded and read-only; the current application does not modify or execute project code.

Versioned evaluation cases exercise workflow behaviour. Local traces and durable usage records expose failures, latency, and available token counts while excluding prompt text, source contents, and credentials from telemetry. Fixture mode is labelled separately from opt-in local-model discovery.

## How I want to judge it

A delivery framework needs to earn its coordination overhead. The evaluation design compares accepted outcomes, human effort, and system cost against a capable coding agent used directly. It also includes small tasks where extra process may be a disadvantage.

The current work includes an analyser for imported comparison records, with failures, missing observations, and measurement coverage visible. Its example measurements are illustrative. They do not establish faster delivery, lower cost, or a benefit to a team.

## Result and next decision

The first local discovery slice is implemented. Public distribution, autonomous coding, shared GitHub planning, and release operation remain future increments. The next product question is whether persistent discovery produces a useful brief with an appropriate amount of operator interaction.
