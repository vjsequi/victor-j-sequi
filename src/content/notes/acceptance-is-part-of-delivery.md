---
title: Acceptance is part of delivering the feature
summary: An onboarding decision and a logout failure made the definition of done more concrete.
date: 2026-10-26
category: Product and operations
order: 2
draft: false
---

Directing agents through a feature means deciding what behaviour matters and checking the result against it. Pulpo's onboarding work gave me two useful examples.

## A product decision becomes a state model

A one-time introductory guide occupied a permanent dashboard destination. I asked for alternatives, chose a temporary welcome panel, and required mobile support. Then I asked what should happen when new lessons were added.

That follow-up mattered. Acknowledging a new-reading notice must not imply that the learner has read the material. A compact interface still needs the underlying states to mean the right things.

## The release includes the surrounding system

During hosted acceptance, background session recovery could recreate a session after logout. Agents diagnosed and corrected the race and performed the technical checks under my direction and review.

The retained release evidence checks logout across current tabs, signed-out access denial, explicit login, and preserved progress. A bounded observation of about eleven minutes recorded no server-error responses or error-level logs.

Those checks establish specific behaviour during a release. They do not establish general uptime or user satisfaction. The lesson I take forward is to include the surrounding transitions in acceptance: leave, return, resume, update, and fail.

[Read the Pulpo case study](../../work/pulpo-oposiciones/).
