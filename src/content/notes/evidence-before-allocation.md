---
title: Evidence before allocation
summary: A payment can balance mathematically while its intended allocation remains unresolved.
date: 2026-10-26
category: Human review
order: 3
draft: false
---

In the invoice-reconciliation prototype, a payment's amount is evidence, but it rarely tells the whole story. A shortfall might reflect a dispute, a partial payment, or a different intended allocation. The application should not invent an explanation to make the arithmetic fit.

## Give interpretation a bounded job

The AI-assisted path can interpret a payment note, cite its source, and propose an allocation. Application code validates exact amounts, permissions, and current balances. A reviewer decides whether to apply the proposal.

A clear question or unresolved case can be the correct outcome. The model's confidence does not replace supporting records or the reviewer's authority.

## Review the explanation as well as the action

I reviewed fourteen saved responses across seven paired synthetic cases with assistant explanations. The assisted workflow handled more of the supplied payment instructions than the narrow rules baseline. This was a small development review, with one repetition per configuration and no independent blind assessment.

One response also revealed a useful distinction: refusing an instruction override did not tell the operator that the source was suspicious. A later change added a separate source-linked warning. That warning supplements the financial controls; it is not proof that arbitrary malicious instructions will be detected.

My next question is how much useful review effort the workflow actually removes. Correct outcomes, supported explanations, appropriate questions, and reviewer time each need their own observation.

[Read the invoice-reconciliation case study](../../work/invoice-reconciliation/).
