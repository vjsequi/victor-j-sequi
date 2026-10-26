---
title: Comparing AI workflows without hiding the tradeoffs
summary: What sixteen synthetic trials revealed about completion, efficiency, and the limits of an automatic grade.
date: 2026-10-26
category: Evaluation
order: 1
draft: false
---

For Pulpo, I directed an agent-executed comparison of four orchestration implementations: the existing native pipeline, Python with SQLite, LangGraph, and self-hosted Prefect. The question was which approach delivered accepted content under a shared set of rules and constraints.

The study ran on 23 October using two fictional, two-page PDFs, with two repetitions per implementation and document: sixteen live trials. Production course content stayed outside the experiment. Source policy, content rules, and model assignments were shared.

## Count completed outcomes

A qualified bank was an export that satisfied the study's content, coverage, and evidence checks. Across four attempts per option:

- LangGraph delivered three qualified banks.
- The existing native pipeline delivered two.
- Python with SQLite delivered one.
- Prefect delivered one.

The preselected quality, reliability, time, and token weights gave LangGraph the highest eligible score in this study. The native pipeline had the strongest efficiency scores for matched workloads. The leading option changed between the two PDFs.

## Separate the reasons for a score

All seven exported banks received the same automatic quality grade. The aggregate difference came from completion and coverage, not an observed advantage in the automatic grading of exported questions.

All four options also passed eight of nine controlled failure/restart cases. The remaining case stopped safely but did not complete recovery. A safe hold and a successful restart answer different operational questions.

## Keep the decision at the measured scope

Two fictional documents and automatic judgments do not establish a general framework winner. Human content validation, operator effort, and billed monetary cost were not measured. Reported tokens include cached input and are not a bill.

The useful result is a visible tradeoff: more completed outputs in this workload versus efficiency on comparable work. I would want broader cases and human review before treating that as a reason to migrate production.

[Read the Pulpo case study](../../work/pulpo-oposiciones/).
