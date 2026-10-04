---
title: Keeping calculations outside the model
summary: A design boundary from the NetWorthAI prototype.
date: 2026-10-04
category: Agent design
order: 1
draft: false
---

A conversational interface can make a structured system easier to use. It also creates a design question: which parts of a request should the model interpret, and which parts should follow an explicit operation?

In NetWorthAI, calculations and state changes live in deterministic logic. The assistant can help interpret an intention and select an operation, while the operation defines how values are calculated and changed.

## Separate the questions

This gives the system two different questions to answer:

- Did the assistant understand the request and choose an appropriate operation?
- Did the operation apply the calculation and update the state correctly?

Those questions need different checks. A correct calculation does not prove that the assistant chose the right action. A plausible explanation does not prove that the numbers are correct.

## Make the result inspectable

Snapshots and audit events leave a record of what changed. Retaining previous values when a data refresh fails also preserves useful context, provided the age and status of that data remain clear.

The prototype has made me interested in this boundary beyond finance. Whenever an agent works with structured state, I want to be able to explain where interpretation ends, what operation runs, and what evidence remains afterward.
