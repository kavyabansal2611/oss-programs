<div align="center">

# OSS Programs

### Your one-stop directory for open source opportunities

A curated, community-maintained hub for **mentorship programs, grants, fellowships, hackathons, and internships** — with deadline tracking, stipend info, and calendar exports.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-22c55e?style=flat)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-ff6b6b?style=flat)](CONTRIBUTING.md)
[![Built by OWASP](https://img.shields.io/badge/Built%20by-OWASP%20Student%20Chapter-003865?style=flat)](https://owasp.org/)

[Live Site](#) · [Report a Bug](https://github.com/OWASP-STUDENT-CHAPTER/oss-programs/issues) · [Request a Program](https://github.com/OWASP-STUDENT-CHAPTER/oss-programs/issues/new)

</div>

---

## Features

| Feature | Description |
|---|---|
| **Deadline Tracking** | Never miss an application window |
| **Search & Filter** | Filter by category, stipend, eligibility, and region |
| **Calendar Export** | One-click export to Google, Apple, or Outlook Calendar |
| **Global Coverage** | Programs from organizations worldwide |
| **Stipend Info** | Compensation details visible at a glance |
| **Fuzzy Search** | Fast, typo-tolerant search powered by Fuse.js |

---

## Supported Programs

| Program | Category | Stipend |
|---|---|---|
| Google Summer of Code (GSoC) | Mentorship | Paid |
| Outreachy | Mentorship | Paid |
| MLH Fellowship | Fellowship | Paid |
| LFX Mentorship | Mentorship | Paid |
| Hacktoberfest | Hackathon | Swag |
| Mozilla Fellowship | Fellowship | Paid |
| NLnet NGI Zero | Grant | Paid |
| And more... | Various | Various |

---

## Tech Stack

```
OSS Programs
├── Framework     → Next.js 16
├── Language      → TypeScript 5
├── Styling       → Tailwind CSS
├── UI Components → shadcn/ui
└── Search        → Fuse.js (fuzzy search)
```

---

## Getting Started

### Prerequisites

- Node.js `v18+`
- npm `v9+`

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/OWASP-STUDENT-CHAPTER/oss-programs.git
cd oss-programs

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

---

## Contributing

We rely on community contributions to keep program deadlines, stipends, and links accurate. All contributions are welcome — whether you're fixing a typo, adding a new program, or improving the UI.

### Contribution Workflow

```mermaid
flowchart TD
    A([You want to contribute]) --> B{What type?}

    B --> C[Add / Update a Program]
    B --> D[Code Improvement]

    C --> E[Find the data file\nin /data or /content]
    D --> F[Browse Issues tab\nlook for good-first-issue]

    E --> G[Fork the repository]
    F --> G

    G --> H[Clone your fork locally]
    H --> I[Create a feature branch]
    I --> J[Make your changes]
    J --> K{Does it pass checks?}

    K -- No --> L[Run npm run lint\nand fix errors]
    L --> J

    K -- Yes --> M[Commit with a clear message]
    M --> N[Push to your branch]
    N --> O[Open a Pull Request\nwith source link]
    O --> P([Merged!])

    style A fill:#4ade80,color:#000
    style P fill:#4ade80,color:#000
    style K fill:#facc15,color:#000
    style L fill:#f87171,color:#000
```

---

### Step-by-Step Guide

**1. Fork & Clone**

```bash
git clone https://github.com/YOUR-USERNAME/oss-programs.git
cd oss-programs
```

**2. Create a Feature Branch**

```bash
git checkout -b update/gsoc-2026-deadlines
```

> Use descriptive branch names like `add/program-name` or `fix/broken-link`.

**3. Run Locally**

```bash
npm install
npm run dev
```

**4. Lint Your Code** *(for TypeScript/React changes)*

```bash
npm run lint
```

**5. Commit & Push**

```bash
git commit -m "Update GSoC 2026 application deadlines and stipend amounts"
git push origin update/gsoc-2026-deadlines
```

**6. Open a Pull Request**

In your PR description, include:
- What program you added or what you changed
- A link to the official source for verification

---

### Adding a New Program

When submitting a new program, make sure your entry includes all of the following fields:

```mermaid
classDiagram
    class Program {
        +String name
        +String category
        +String description
        +String eligibility
        +String stipend
        +Date   deadline
        +URL    officialUrl
    }

    class Category {
        <<enumeration>>
        Mentorship
        Grant
        Hackathon
        Fellowship
        Internship
    }

    Program --> Category : must be one of
```

| Field | Description | Example |
|---|---|---|
| `name` | Official program name | `"Google Summer of Code"` |
| `category` | One of: Mentorship, Grant, Hackathon, Fellowship | `"Mentorship"` |
| `description` | Max 3 sentences | `"GSoC is a global program..."` |
| `eligibility` | Who can apply | `"University students, Global"` |
| `stipend` | Compensation details | `"$1500–$6600 USD"` or `"Unpaid"` |
| `deadline` | ISO 8601 format | `"2026-04-01"` |
| `officialUrl` | Link to the official page | `"https://summerofcode.withgoogle.com"` |

---

### Good First Issues

New to the project? Start here:

1. Go to the [Issues tab](https://github.com/OWASP-STUDENT-CHAPTER/oss-programs/issues)
2. Filter by **`good first issue`** or **`help wanted`**
3. Comment on the issue to claim it before starting

---

## Project Structure

```mermaid
graph TD
    Root["oss-programs/"] --> App["app/"]
    Root --> Components["components/"]
    Root --> Data["data/"]
    Root --> Public["public/"]
    Root --> Lib["lib/"]

    App --> Pages["Pages & Layouts\n(Next.js App Router)"]
    Components --> UI["shadcn/ui components\n& custom UI"]
    Data --> Programs["programs.ts / .json\n<-- Edit this to add programs"]
    Lib --> Utils["Utility functions\nSearch logic (Fuse.js)"]
    Public --> Assets["Static assets\nIcons & images"]

    style Data fill:#fef08a,color:#000
    style Programs fill:#fef08a,color:#000
```

> **To add or update a program**, you'll primarily be working inside the `data/` directory.

---

## License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

Built by the [OWASP Student Chapter](https://owasp.org/) to help students and developers discover open source opportunities worldwide.

**Want to see a program added? [Open an issue](https://github.com/OWASP-STUDENT-CHAPTER/oss-programs/issues/new)**

---

<div align="center">

**Star this repo if it helped you find an opportunity!**

</div>
