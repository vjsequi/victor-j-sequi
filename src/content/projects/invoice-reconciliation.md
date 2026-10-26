---
title: Invoice Reconciliation Investigator
summary: A review workbench connecting payment evidence, proposed allocations, and human approval.
category: Finance workflow
status: Prototype
number: "02"
tags: [Python, Human review, Evaluation]
order: 2
outcome: A working local application with exact financial operations, source-linked investigation, a review interface, evaluations, and local telemetry.
draft: false
---

## The business problem

A customer payment may cover several invoices, leave a disputed amount, or arrive with an unclear reference. The reviewer needs to understand the intended allocation, what remains outstanding, and which evidence supports the decision.

This project explores an evidence-led review workbench for small service businesses. Reducing review effort is a product hypothesis; customer demand and time savings remain to be validated.

## Product scope and direction

I am developing this as an independent portfolio project, with a narrow initial workflow: import supported bank CSVs and text-based invoice PDFs, inspect the sources, investigate an ambiguous payment, and approve or correct a proposed allocation.

The interface puts the allocation table and evidence first. A clarification question is a useful outcome when the available records do not justify a decision. Every allocation requires a reviewer; the language model cannot approve it.

## Engineering decisions

The local application combines Python, FastAPI, PostgreSQL, a TypeScript review interface, and a bounded LangGraph investigation. Rules handle confirmed references. The AI-assisted path interprets payment language and returns a structured proposal or a focused request for missing information.

Application code validates amounts and permissions, rechecks the current evidence and balances, and records an approved allocation transactionally. Money uses integer cents. Retry and reversal handling preserve the financial history.

For example, a fictional payment of EUR 1,970 against invoices totalling EUR 2,000 does not explain its own EUR 30 shortfall. A supporting note can justify a split while leaving the disputed balance outstanding. The system must preserve that distinction.

## Evaluation that changed the product

In a review completed on 17 October, I examined fourteen saved responses from seven paired synthetic cases with assistant explanations. The AI-assisted configuration passed exact-outcome checks on seven of seven cases; a deliberately conservative rules baseline passed four of seven. My support and usefulness review accepted seven of seven assisted responses and three of seven baseline responses.

This was one repetition per configuration and an assisted owner review. It is a small development result, not an independent accuracy estimate, a model ranking, or evidence of commercial savings.

That review also exposed a reporting gap: a safe response to an attempted instruction override did not warn the operator about the suspicious source. The current application adds a separate, source-linked advisory warning. Historical responses remain unchanged, so later improvements are not presented as original results.

## Operations and delivery status

Durable jobs, financial audit events, and OpenTelemetry traces and metrics are implemented locally. Telemetry excludes source text and sensitive identifiers; financial audit history remains separate from diagnostic logs. Security warnings support review and do not establish general attack-detection accuracy.

The implemented result is a local prototype. Cloud operation, an accepted public interactive demo, and real business use remain future milestones. The next useful evidence is a broader frozen comparison and measured reviewer effort.
