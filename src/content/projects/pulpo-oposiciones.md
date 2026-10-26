---
title: Pulpo Oposiciones
summary: A live learning product, directed by me and implemented end-to-end by AI agents.
category: Learning product
status: In production
number: "01"
tags: [Product direction, Agent delivery, Operations]
order: 1
outcome: A live subscription learning product with a source-based content workflow, reviewed releases, and recorded production acceptance.
draft: false
---

## The business problem

Examination preparation involves a large body of source material. Pulpo turns that material into concepts, practice questions, explanations, and memory cards, delivered through a subscription learning application. The product problem includes content quality, navigation, access, and the learner's return visits.

## My role

I directed the project and reviewed the work. AI agents implemented it end-to-end, including the frontend, backend, cloud setup, deployment, and technical verification. My contribution was setting the requirements, choosing between alternatives, challenging behaviour, and reviewing the delivered result.

## Product decisions

I noticed that a one-time introductory guide occupied a permanent dashboard destination. I asked for alternatives, selected a temporary welcome panel, and required a suitable mobile experience. The recurring study tools remain visible while onboarding can retire after completion.

I then asked what would happen when new lessons were added. I approved a compact later-reading notice, preserving the difference between acknowledging an update and actually reading it. This gave the agents concrete state transitions to implement and check.

## Engineering and delivery

The learner application uses Next.js, a private Fastify API, Firebase identity and Firestore, Cloud Run, and Stripe subscription handling. Firebase Hosting is the public entry point. Authentication, course entitlement, and publication are separate boundaries.

Content preparation has a different lifecycle from serving learners: establish source scope, generate candidates, review them, check coverage, and export accepted material. Bounded corrections or additions retain their evidence. Publication to the live product is a separate decision.

Changes progress through development, staging, and production with recorded checks. This makes the acceptance criteria part of delivery, including mobile behaviour and retained learner state.

## Operating the product

Hosted acceptance on 16 October exposed a session race: background renewal could recreate a session after logout. Agents diagnosed and corrected it, with independent agent review. The release record checks logout across current tabs, denial of private access while signed out, explicit login, and retained progress.

A subsequent observation of about eleven minutes recorded no HTTP 5xx responses or error-level logs. That is a bounded release check, not an uptime guarantee or a measurement of customer adoption.

## Results and learning

Pulpo is in production with a public ENAIRE preparation course. The delivered result combines learning content, account access, practice, progress, and subscription delivery.

I also directed a separate comparison of four content-workflow implementations across sixteen live trials using fictional documents. It exposed a tradeoff between completed outputs and execution efficiency. The [comparison note](../../notes/comparing-ai-workflows/) explains the results and their limits.

The next product evidence I want is human assessment of content usefulness and the effort required to review it. Published content, automatic grades, and successful release checks do not establish learning gains, revenue, or time saved.

[Visit the public Pulpo Oposiciones course](https://pulpoposiciones.com/oposiciones/enaire-controladores).
