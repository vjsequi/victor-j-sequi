---
title: Pulpo Oposiciones
summary: An AI-assisted learning platform, from source documents to reviewed study material.
category: Learning product
status: In production
number: "01"
tags: [Applied AI, Product architecture, Evaluation]
order: 1
outcome: A production examination-preparation platform connecting content generation, review, and a subscription learning application.
draft: false
---

## The problem

Preparing for an examination means turning a large body of source material into something a person can learn from and practise with. Generating questions is only one part of that problem. The material also needs to be reviewed and delivered through a usable product.

## What I contributed

I led the architecture and agent-assisted development of Pulpo Oposiciones. The work spans source-document ingestion, content generation and evaluation, and the application that delivers the learning material.

The product brings together reviewed concepts, study cards, and multiple-choice questions. Its delivery stack includes Next.js, Fastify, Firebase, and Cloud Run.

## A decision that shaped the system

Content generation follows explicit generation, evaluation, and repair stages. Accepted outputs pass into the next stage, with review before publication.

This makes the path from source material to published content something that can be inspected. The quality of the product depends on that path as much as on the initial generation.

## The result

Pulpo Oposiciones is in production, with a public course for ENAIRE examination preparation. It connects reviewed learning material with a subscription application, bringing the content pipeline and the learner experience into one product.

[Visit the public Pulpo Oposiciones course](https://pulpoposiciones.com/oposiciones/enaire-controladores).

## What I want to explain next

How an individual piece of source material moves through generation and review, and which decisions still need human judgement.
