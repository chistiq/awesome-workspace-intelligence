# Awesome Workspace Intelligence

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of tools and resources for understanding codebases and
> software systems.

A workspace can include one repository or many. It may connect applications,
services, libraries, infrastructure, tests, and documentation. Workspace
intelligence helps developers and AI tools understand how those parts fit
together and change over time.

Workspai contributors maintain this list, but Workspai is reviewed under the
same [governance rules](GOVERNANCE.md) as every other entry.

## Contents

- [Start Here](#start-here)
- [Foundations and Architecture](#foundations-and-architecture)
- [Workspace Discovery and Inventory](#workspace-discovery-and-inventory)
- [Repository and Code Understanding](#repository-and-code-understanding)
- [Workspace Models and Software Graphs](#workspace-models-and-software-graphs)
- [Change and Impact Intelligence](#change-and-impact-intelligence)
- [Policies and Verification](#policies-and-verification)
- [AI Context and Agents](#ai-context-and-agents)
- [Protocols and Integrations](#protocols-and-integrations)
- [Evaluation and Benchmarks](#evaluation-and-benchmarks)
- [Research and Learning](#research-and-learning)
- [Related Lists](#related-lists)
- [Contributing](#contributing)
- [License](#license)

## Start Here

Workspace intelligence is broader than repository search and narrower than
general developer tooling. A useful reference architecture is:

```text
Repositories · Projects · Dependencies · Policies · Changes · Runtime
                               │
                               ▼
                     Canonical System Model
                               │
                               ▼
                 Evidence-backed Software Graph
                               │
                               ▼
          Diff · Impact · Health · Verify · Context · Explain
                               │
                               ▼
                Developers · CI · IDEs · AI agents
```

This is an architectural pattern, not a requirement that every listed project
implement every layer. The list includes focused tools when they make one layer
materially stronger and interoperable with the rest of the system.

## Foundations and Architecture

### System Architecture

- [C4 Model](https://c4model.com/) - Describes software systems through hierarchical context, container, component, and code views with a shared visual vocabulary.
- [Structurizr](https://github.com/structurizr) - Provides models, DSLs, tooling, and rendering workflows for architecture-as-code based on the C4 model.
- [Team Topologies](https://teamtopologies.com/key-concepts) - Connects team boundaries, interaction modes, and cognitive load to the architecture and flow of software systems.

### Workspace and Platform Models

- [Backstage System Model](https://backstage.io/docs/features/software-catalog/system-model/) - Defines components, APIs, resources, systems, domains, groups, and ownership relationships for a software catalog.
- [Devfile](https://devfile.io/docs/2.3.0/what-is-a-devfile) - Specifies portable development environments, commands, components, and events in a declarative workspace file.

## Workspace Discovery and Inventory

### Software Catalogs

- [Backstage Software Catalog](https://backstage.io/docs/features/software-catalog/) - Builds a centralized catalog from metadata stored with code and relates software components to ownership and operational tooling.
- [Cortex](https://www.cortex.io/software-catalog) - Maintains a service catalog that combines ownership, dependencies, standards, scorecards, and operational metadata.
- [OpsLevel](https://www.opslevel.com/product/software-catalog) - Organizes services, systems, dependencies, ownership, maturity, and operational integrations in a developer portal.

### Dependency and Supply-Chain Inventory

- [CycloneDX](https://github.com/CycloneDX/specification) - Defines a bill-of-materials standard for software, services, vulnerabilities, dependencies, and supply-chain relationships.
- [SPDX](https://github.com/spdx/spdx-spec) - Standardizes software package, file, licensing, security, and provenance information for interoperable inventories.
- [Syft](https://github.com/anchore/syft) - Generates software bills of materials from container images and filesystems with package and dependency evidence.

### Source Discovery

- [Tree-sitter](https://github.com/tree-sitter/tree-sitter) - Produces concrete syntax trees incrementally across many languages for source discovery and structural analysis.
- [Universal Ctags](https://github.com/universal-ctags/ctags) - Extracts names, kinds, locations, and language-specific symbols from a broad set of source formats.

## Repository and Code Understanding

### Semantic and Structural Analysis

- [CodeQL](https://github.com/github/codeql) - Creates queryable semantic representations of code for program analysis, security research, and cross-repository investigations.
- [Graphify](https://github.com/Graphify-Labs/graphify) - Builds a local knowledge graph from code, documentation, schemas, and media with explainable extracted, inferred, and ambiguous edges.
- [Joern](https://github.com/joernio/joern) - Builds code property graphs and provides a query language for analyzing program structure, data flow, and vulnerabilities.
- [SCIP](https://github.com/scip-code/scip) - Defines a language-agnostic indexing protocol for precise code navigation and cross-tool symbol intelligence.
- [Semgrep](https://github.com/semgrep/semgrep) - Applies structural and semantic rules across codebases for security, correctness, and organization-specific policy checks.
- [Sourcegraph](https://github.com/sourcegraph/sourcegraph) - Indexes code across repositories for search, navigation, ownership, batch changes, and code intelligence.
- [Understand Anything](https://github.com/Egonex-AI/Understand-Anything) - Builds an interactive codebase knowledge graph with structural, domain, dependency, and change-impact views.

### Documentation and Architecture Recovery

- [Doxygen](https://github.com/doxygen/doxygen) - Extracts source structure, references, and documentation into navigable project documentation and diagrams.
- [OpenWiki](https://github.com/langchain-ai/openwiki) - Generates and incrementally maintains agent-oriented repository wikis, source maps, architecture notes, and linked project knowledge.
- [Sourcetrail](https://github.com/CoatiSoftware/Sourcetrail) - Preserves a historical open implementation of interactive source indexing and dependency navigation.

## Workspace Models and Software Graphs

### Dependency and Architecture Graphs

- [dependency-cruiser](https://github.com/sverweij/dependency-cruiser) - Validates JavaScript and TypeScript dependency rules and exports module graphs for architecture analysis.
- [jQAssistant](https://github.com/jQAssistant/jqassistant) - Scans software structures into Neo4j and evaluates executable architecture concepts and constraints.
- [Repowise](https://github.com/repowise-dev/repowise) - Connects code and dependency graphs with Git history, generated documentation, architecture decisions, health, and change-risk evidence.
- [Workspai](https://github.com/chistiq/workspai) - Builds a canonical workspace model and a revision-bound, proof-backed software graph for impact, verification, and bounded agent context.

### Infrastructure and Operational Graphs

- [Cartography](https://github.com/cartography-cncf/cartography) - Consolidates cloud, SaaS, identity, and infrastructure assets into a graph for security and operational analysis.
- [CloudQuery](https://github.com/cloudquery/cloudquery) - Extracts cloud and infrastructure configuration into queryable destinations for inventory, policy, and relationship analysis.

## Change and Impact Intelligence

### Affected Scope and Dependency Impact

- [Bazel Query](https://bazel.build/query/guide) - Queries build dependency graphs and reverse dependencies to compute affected targets and inspect build structure.
- [code-review-graph](https://github.com/tirth8205/code-review-graph) - Maintains an incremental code graph for blast-radius analysis, affected tests, risk-scored reviews, and bounded agent context.
- [Nx Affected](https://nx.dev/ci/features/affected) - Uses the project graph and Git changes to run tasks only for directly or transitively affected projects.
- [Pants Dependencies](https://www.pantsbuild.org/stable/docs/using-pants/key-concepts/targets-and-build-files) - Infers and validates target dependencies to support precise builds, tests, and change-scoped workflows.
- [Turborepo Affected](https://turborepo.com/docs/crafting-your-repository/constructing-ci#using---affected) - Combines Git history with the package graph to scope monorepo tasks to affected packages.

### Automated Change

- [OpenRewrite](https://github.com/openrewrite/rewrite) - Applies structured, testable recipes across repositories for large-scale refactoring and dependency migrations.
- [Sourcegraph Batch Changes](https://sourcegraph.com/docs/batch_changes) - Plans, executes, tracks, and reviews coordinated code changes across many repositories.

## Policies and Verification

### Policy and Contracts

- [Conftest](https://github.com/open-policy-agent/conftest) - Tests structured configuration with policy-as-code rules before changes reach deployment systems.
- [CUE](https://github.com/cue-lang/cue) - Unifies data, schemas, constraints, and policy to validate configuration and generate consistent outputs.
- [Open Policy Agent](https://github.com/open-policy-agent/opa) - Evaluates declarative policy decisions across CI, infrastructure, APIs, and application authorization.

### Provenance and Supply-Chain Verification

- [in-toto](https://github.com/in-toto/in-toto) - Records and verifies authorized steps, actors, and artifacts across a software supply chain.
- [OpenSSF Scorecard](https://github.com/ossf/scorecard) - Produces evidence-backed checks for security practices across open-source repositories.
- [SLSA](https://slsa.dev/spec/v1.2/) - Defines supply-chain security levels and provenance requirements for trustworthy software build artifacts.

### Quality and Readiness

- [ArchUnit](https://github.com/TNG/ArchUnit) - Tests Java architecture constraints such as layers, dependencies, cycles, naming, and annotations as executable rules.
- [Codex Security](https://github.com/openai/codex-security) - Scans repositories, validates and fixes security findings, preserves scan history, and runs security checks in CI.
- [deepsec](https://github.com/vercel-labs/deepsec) - Runs resumable, agent-powered vulnerability investigations across large repositories with revalidation and structured findings.
- [SonarQube](https://github.com/SonarSource/sonarqube) - Aggregates static-analysis findings and quality gates across projects, branches, and pull requests.

## AI Context and Agents

### Repository Context

- [Aider Repository Map](https://aider.chat/docs/repomap.html) - Builds a compact map of important repository symbols and relationships to fit relevant structure into an LLM context window.
- [Continue Codebase Awareness](https://docs.continue.dev/customize/deep-dives/codebase) - Documents indexing, retrieval, embeddings, and context selection for repository-aware coding assistants.
- [Repomix](https://github.com/yamadashy/repomix) - Packages selected repository content into AI-friendly files with filtering, token counting, and security checks.

### Instructions and Persistent Context

- [AGENTS.md](https://agents.md/) - Defines a simple repository instruction file for guiding coding agents with project-specific setup, testing, and conventions.
- [Claude Code Memory](https://docs.anthropic.com/en/docs/claude-code/memory) - Documents hierarchical project instructions and scoped rules that persist repository knowledge across agent sessions.

## Protocols and Integrations

### Agent and Tool Protocols

- [Model Context Protocol](https://modelcontextprotocol.io/specification/) - Standardizes how AI applications discover and consume tools, resources, prompts, and contextual data from external servers.

### Developer Tool Protocols

- [Language Server Protocol](https://microsoft.github.io/language-server-protocol/) - Standardizes editor access to language intelligence such as symbols, references, diagnostics, and navigation.
- [OpenTelemetry](https://opentelemetry.io/docs/specs/otel/) - Defines interoperable telemetry signals and semantic conventions for observing runtime systems across services.
- [SARIF](https://docs.oasis-open.org/sarif/sarif/v2.1.0/sarif-v2.1.0.html) - Standardizes static-analysis results so tools, CI systems, and IDEs can exchange findings with locations and provenance.

## Evaluation and Benchmarks

### Repository-Level Understanding

- [CodeSearchNet](https://github.com/github/CodeSearchNet) - Provides a large corpus and benchmark tasks for semantic code search across multiple programming languages.
- [CrossCodeEval](https://github.com/amazon-science/cceval) - Evaluates cross-file code completion where relevant context must be retrieved from other parts of a repository.
- [RepoBench](https://github.com/Leolty/repobench) - Benchmarks repository-level code completion and retrieval under realistic cross-file dependencies.

### Software Engineering Agents

- [SWE-bench](https://github.com/SWE-bench/SWE-bench) - Evaluates systems on real repository issues that require code understanding, modification, and test-based verification.
- [SWE-bench Multimodal](https://github.com/SWE-bench/SWE-bench_Multimodal) - Extends repository issue resolution evaluation to user-interface tasks with visual evidence.

## Research and Learning

### Communities and Conferences

- [IEEE Working Conference on Mining Software Repositories](https://conf.researchr.org/series/msr) - Publishes research on extracting, modeling, and learning from software repositories and development artifacts.
- [SANER](https://conf.researchr.org/series/saner) - Covers software analysis, evolution, architecture recovery, program comprehension, and reengineering.

### Books and Guides

- [Building Evolutionary Architectures](https://www.thoughtworks.com/insights/books/building-evolutionary-architectures-second-edition) - Explains fitness functions and incremental architectural change for systems that must evolve without losing governance.
- [Software Architecture: The Hard Parts](https://www.oreilly.com/library/view/software-architecture-the/9781492086888/) - Examines distributed architecture decisions, trade-offs, coupling, workflows, and evolutionary change.

## Related Lists

- [Awesome Context Engineering](https://github.com/Meirtz/Awesome-Context-Engineering) - Surveys context construction, retrieval, memory, protocols, agent runtimes, evaluation, and production practices.
- [Awesome Knowledge Graph](https://github.com/totogo/awesome-knowledge-graph) - Curates knowledge-graph learning material, infrastructure, datasets, construction tools, and related projects.
- [Static Analysis](https://github.com/analysis-tools-dev/static-analysis) - Catalogs static-analysis tools across programming languages, configuration formats, infrastructure, and security domains.

## Contributing

Contributions are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) for the
two-minute pull request path, or use the **Suggest a resource** issue form if
you prefer not to edit files.

Please submit one resource per pull request, explain which workspace-level
question it helps answer, and disclose any affiliation. The dependency-free
validator runs with:

```bash
npm test
```

## License

This list is dedicated to the public domain under
[CC0 1.0 Universal](LICENSE). Linked resources retain their own licenses and
terms.
