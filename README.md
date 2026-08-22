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
  One engineer, <b>120+ live services</b>, mostly Rust. Agents that supervise other agents,<br/>
  retrieval that's actually measured, and the infrastructure that keeps it all up at 3 a.m.<br/>
  Anyone can ship a demo. I run the part that comes after.
</p>

<p align="center">
  <a href="https://ark.chakrakali.com"><b>ark.chakrakali.com</b></a>
  &nbsp;·&nbsp; <a href="mailto:engineering@chakrakali.com">engineering@chakrakali.com</a>
  &nbsp;·&nbsp; <sub>open to a few remote contract / consulting engagements</sub>
</p>

---

### What I'd point you at first

- **[portfolio](https://github.com/SA-Ark/portfolio)** — the map of the whole estate: the architecture, how one person runs 120+ services, and links to every live demo. Start here.
- **[nexus](https://github.com/SA-Ark/nexus)** — how I keep a fleet of AI agents from falling over. Work runs off a dependency graph, a stalled agent is caught by evidence rather than a timeout and retried, and anything genuinely risky stops to ask a human. [Watch it run →](https://nexus.chakrakali.com)
- **[aegis](https://github.com/SA-Ark/aegis)** — a Rust CLI that grades a codebase or a live URL the way I would on day one of a rescue: leaked secrets, shaky dependencies, untested critical paths, sloppy config. One binary, one score. `cargo install aegis-audit`
- **[mindvault](https://github.com/SA-Ark/mindvault)** — the memory layer behind my agents. Hybrid recall (BM25 + vectors, fused) over a knowledge graph on pgvector, and no retrieval change ships without the eval harness proving it (recall@k, MRR, latency).
- **[scour](https://github.com/SA-Ark/scour)** — the search primitives underneath that, pulled into a zero-dependency Rust crate: BM25, HNSW, reciprocal-rank fusion, and chunking that never splits a UTF-8 character. [Live demo →](https://scour.chakrakali.com) · `cargo add scour-search`
- **[crucible](https://github.com/SA-Ark/crucible)** — an evaluation harness for LLM and RAG systems. Score what your model actually returned against ground truth — recall@k, MRR, nDCG, token-F1 — with pass/fail thresholds that drop straight into CI. `cargo install crucible-eval`

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

"Done" means it's verified on the live URL, not that it compiled. If I claim a system does something, there's a benchmark or a test behind it — otherwise I'll tell you it's unverified. When something breaks I dig for the actual cause; patching the symptom just hides the next outage. And the CI gates only ever get stricter.

### Stack

**Languages** · Rust · TypeScript · Python · SQL

**AI / ML** · LLM orchestration · multi-agent systems · RAG · vector search · knowledge graphs · pgvector · embeddings · GPU inference · MLOps

**Backend / Data** · Axum · Tokio · PostgreSQL · Redis · Qdrant · REST APIs · WebSockets · async / concurrent systems

**Infra / Ops** · Docker · Linux · systemd · Cloudflare · CI/CD · observability · self-hosted fleet · Model Context Protocol (MCP)

**Frontend** · Next.js · React · Tailwind CSS

<p align="center">
  <img src="https://skillicons.dev/icons?i=rust,ts,python,go,postgres,redis,docker,linux,cloudflare,nextjs,react,tailwind,vercel,nginx,wasm,githubactions&perline=8" alt="tech stack" />
</p>
