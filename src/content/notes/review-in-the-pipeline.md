---
title: Review belongs in the pipeline
summary: What a learning product asks of AI-generated content.
date: 2026-10-04
category: Building products
order: 2
draft: false
---

An AI-generated question can look convincing before anyone has checked whether it is useful for learning. That makes the process around generation an important part of the product.

Pulpo Oposiciones brings source documents, generated concepts, study cards, and examination questions into the same delivery process. Each step creates something that the next step depends on.

## Give each stage an explicit output

The architecture uses generation, evaluation, and repair stages. Accepted outputs move forward, and content is reviewed before publication.

This creates a clearer place to inspect an error. Was something missed in the source? Did generation introduce an unsupported claim? Did a later stage change the meaning?

## Treat publication as a decision

Producing an output and making it available to learners are separate events. A review point between them gives the system a place to decide whether the material is ready.

Review is one part of assessing quality. Accuracy and usefulness for learners need their own evaluation.

The practical lesson for me is to give review a defined place in the architecture, with inputs and outputs that a person can examine.
