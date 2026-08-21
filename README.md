<!--
  PROFILE README HUB — github.com/SA-Ark  ·  identity: "Ark" <engineering@chakrakali.com>
  Stats self-hosted via lowlighter/metrics -> output branch (.github/workflows/metrics.yml).
  keywords for search: AI Engineer, Machine Learning, LLM, RAG, multi-agent systems, agentic AI,
  LLM orchestration, pgvector, vector database, semantic search, knowledge graph, distributed systems,
  AI infrastructure, Rust, TypeScript, Python, PostgreSQL, Next.js, MLOps.
-->

<!-- Banner carries the name; the bare <h1>Ark</h1> is intentionally replaced by this. -->
<img src="https://capsule-render.vercel.app/api?type=waving&height=170&color=0:0d1117,100:1e3a5f&text=Ark&fontSize=52&fontColor=e2e8f0&fontAlignY=40&animation=fadeIn&desc=Production%20AI%20Systems%20Engineer&descSize=16&descAlignY=60&descColor=8b949e" alt="Ark — Production AI Systems Engineer" width="100%" />

<p align="center">
  <a href="https://git.io/typing-svg">
    <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=22&pause=1000&color=5A67D8&center=true&vCenter=true&width=760&lines=I+build+AI+systems+that+run+in+production;Multi-agent+orchestration+%C2%B7+RAG+%C2%B7+Rust;120%2B+services%2C+one+engineer" alt="typing" />
  </a>
</p>

<p align="center">
  I build and run a whole production AI platform on my own — <b>120+ live services</b>, mostly in Rust.<br/>
  Agents that supervise other agents, retrieval that's actually measured, and the boring infrastructure<br/>
  that keeps it all standing when I'm asleep. I care about the part after the demo works.
</p>

<p align="center">
  <a href="https://ark.chakrakali.com"><b>ark.chakrakali.com</b></a>
  &nbsp;·&nbsp; <a href="mailto:engineering@chakrakali.com">engineering@chakrakali.com</a>
  &nbsp;·&nbsp; <sub>open to a few remote contract / consulting engagements</sub>
</p>

---

### What I'd point you at first

- **[nexus](https://github.com/SA-Ark/nexus)** — how I keep a fleet of AI agents from falling over. It schedules work as a dependency graph, notices when an agent stalls (by evidence, not a timeout), retries it, and stops to ask a human when a call is above its pay grade. [Watch it run →](https://nexus.chakrakali.com)
- **[aegis](https://github.com/SA-Ark/aegis)** — a Rust CLI that grades a codebase or a live URL the way I would on day one of a rescue: leaked secrets, shaky dependencies, untested critical paths, sloppy config. One binary, one score. Full source.
- **[mindvault](https://github.com/SA-Ark/mindvault)** — the memory layer behind my agents. Hybrid recall (BM25 + vectors, fused) over a knowledge graph on pgvector, and I don't ship a retrieval change without the eval harness proving it (recall@k, MRR, latency).
- **[scour](https://github.com/SA-Ark/scour)** — the search primitives underneath that, pulled out into a zero-dependency Rust crate: BM25, HNSW, rank fusion, chunking that doesn't split a UTF-8 character in half. [Live demo →](https://scour.chakrakali.com) · Full source.
- **[portfolio](https://github.com/SA-Ark/portfolio)** — the map of the whole estate: architecture, how one person operates 120+ services, and links to the live demos.

---

<div align="center">

<img src="https://raw.githubusercontent.com/SA-Ark/SA-Ark/output/estate-status.svg" alt="estate status: 120+ self-hosted production services, 12,000+ contributions in the last 12 months, 180K+ memories indexed at 100% embedding coverage, Lighthouse 100" width="840" />

</div>

---

<div align="center">

<!-- lowlighter/metrics: single pre-rendered dark SVGs, no light variant exists — left as-is. -->
<img src="https://raw.githubusercontent.com/SA-Ark/SA-Ark/output/metrics.svg" alt="metrics" width="840" />
<img src="https://raw.githubusercontent.com/SA-Ark/SA-Ark/output/metrics.isocalendar.svg" alt="contribution calendar" width="840" />
<img src="https://raw.githubusercontent.com/SA-Ark/SA-Ark/output/metrics.languages.svg" alt="languages" width="840" />

</div>

---

<div align="center">

<!-- Activity graph: real light/dark variants, so it theme-switches with the viewer's GitHub theme. -->
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://github-readme-activity-graph.vercel.app/graph?username=SA-Ark&theme=github-dark&hide_border=true&area=true&custom_title=Contribution%20activity" />
  <source media="(prefers-color-scheme: light)" srcset="https://github-readme-activity-graph.vercel.app/graph?username=SA-Ark&theme=github-light&hide_border=true&area=true&custom_title=Contribution%20activity" />
  <img src="https://github-readme-activity-graph.vercel.app/graph?username=SA-Ark&theme=github-dark&hide_border=true&area=true&custom_title=Contribution%20activity" alt="contribution activity graph" width="840" />
</picture>

</div>

---

<div align="center">

<!-- 3D isometric contribution calendar, generated daily by .github/workflows/profile-3d.yml. -->
<!-- 404s until the Action first runs; the supervisor triggers it. -->
<img src="./profile-3d-contrib/profile-night-view.svg" alt="3D isometric contribution calendar" width="840" />

</div>

---

### How I work

I don't call something done because it compiled — I call it done when it's verified on the real URL. Every claim I make about a system comes with a benchmark or a test, or I say it's pending. When something breaks I go find the actual cause instead of papering over it, because a workaround is just a slower bug. And I keep the quality gates one-directional: they can tighten, never loosen.

<p align="center">
  <img src="https://img.shields.io/badge/Rust-000000?logo=rust&logoColor=white" alt="Rust" />
  <img src="https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white" alt="Python" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/PostgreSQL%20%2B%20pgvector-336791?logo=postgresql&logoColor=white" alt="PostgreSQL + pgvector" />
  <img src="https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white" alt="Next.js" />
</p>
