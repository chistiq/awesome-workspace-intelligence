# Contributing

Thank you for improving Awesome Workspace Intelligence. The goal is to help
people understand and govern real software systems across repositories,
projects, dependencies, changes, evidence, and tool boundaries.

By participating, you agree to follow the [Code of Conduct](CODE_OF_CONDUCT.md).

## Fastest ways to contribute

### Add a resource with a pull request

1. Search `README.md`, open issues, and open pull requests for duplicates.
2. Add one entry to the most specific section:

   ```markdown
   - [Resource name](https://primary.example/resource) - Factual explanation of which software-system question it helps answer.
   ```

3. Keep the section alphabetical.
4. Run:

   ```bash
   npm test
   ```

5. Open a pull request and complete the short template.

No dependency installation is required. The validator uses Node.js 20 or newer.

### Suggest a resource without editing

Open the **Suggest a resource** issue form. A maintainer or another contributor
can turn an accepted suggestion into a pull request.

### Fix an existing entry

Small corrections may share a pull request. Use the **Report a problem** form
for a dead link, unsafe redirect, inaccurate description, or category problem.

## What belongs here

A resource should materially help answer one or more workspace-level questions:

- What projects, services, APIs, runtimes, infrastructure, and policies exist?
- How are those parts connected across repository boundaries?
- What changed, and what is directly or transitively affected?
- Which source evidence supports a fact or relationship?
- Is the affected system healthy, conformant, ready, and verified?
- What bounded, current context should a developer, CI job, IDE, or agent read?
- How can a decision or blocker be traced and explained?

Relevant resources include discovery tools, canonical models, software graphs,
architecture analysis, dependency intelligence, impact analysis, contracts,
policy and verification systems, context engineering for code, protocols,
benchmarks, research, and substantial technical guides.

Generic coding agents, prompt collections, graph databases, IDE extensions, and
observability products belong only when their workspace-level contribution is
specific and documented.

## Quality bar

Submissions should:

- link to a primary source;
- be documented well enough to evaluate;
- solve a clear software-system understanding or governance problem;
- be maintained, or have lasting historical or research value;
- have a concise, factual description explaining why it is useful;
- disclose whether the contributor owns, works for, or represents the resource.

There is no minimum star count and no automatic waiting period. Popularity can
support an argument, but it does not replace relevance or quality.

## Style

- Use one resource per pull request.
- Use the canonical project name and URL.
- Start descriptions with a capital letter and end them with a period.
- Keep descriptions between 20 and 240 characters.
- Avoid taglines, superlatives, emoji, badges, pricing, and star counts.
- Avoid `utm_*`, referral, affiliate, shortened, and search-result URLs.
- Put taxonomy changes in a separate pull request.
- Do not add Workspai or any maintainer-owned project under easier rules.

## Commit messages

Use this format for commit messages and pull request titles:

```text
<type>: <short imperative summary>
```

Allowed types:

- `add` for a new resource or section;
- `fix` for a correction, removal, or broken link;
- `docs` for contributor documentation or governance;
- `chore` for validation, workflows, or repository maintenance.

Examples:

```text
add: include Graphify in workspace graphs
fix: replace the SCIP repository URL
docs: clarify resource quality criteria
chore: update list validation
```

Use a lowercase type, keep the summary at 72 characters or fewer, and do not
end it with a period. Maintainers normally squash pull requests and may
normalize the final commit message. Contributors using GitHub's web editor only
need to ensure that the pull request title follows this format.

## Review

Maintainers review scope, usefulness, evidence, description quality, placement,
duplication, and disclosed conflicts. A request for changes is an invitation to
improve the contribution, not a rejection of the contributor.

See [GOVERNANCE.md](GOVERNANCE.md) for decisions, conflicts of interest,
removals, and appeals.
