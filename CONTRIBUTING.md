# Contributing to OSS Opportunities

First off, thank you for considering contributing! The value of this project is entirely dependent on keeping the dates and programs up-to-date, which is a community effort.

There are three primary ways you can contribute to the project:

## 1. Add a New Program (via GitHub Issue) - Best for non-technical users
If you know of a program that isn't listed, simply [open an issue](https://github.com/yourusername/reponame/issues/new/choose) and select the "Add a New Program" template. Fill out as much information as you can. A maintainer will format it into YAML and merge it.

## 2. Add or Update a Program (via Pull Request) - Best for developers
If the current year's deadlines for a program have changed, or if you want to add a new program directly:

1. Fork the repository
2. Navigate to `data/programs/`
3. Edit the existing `.yaml` file or create a new one (using `kebab-case.yaml`).
4. **Dates must be in `YYYY-MM-DD` format** and are treated as UTC. Always add a new object to the `dates` array rather than deleting the old years. This preserves historical tracking.
5. Create a Pull Request with a link to the official source verifying the dates.

### Schema Requirements

```yaml
name: Google Summer of Code
slug: gsoc              # Must match filename (gsoc.yaml)
description: A global program where students contribute to open source projects.
category: mentorship    # mentorship | grant | fellowship | hackathon | internship
tags: [beginner-friendly, stipend, coding]
eligibility:
  type: students        # students | open | professionals
  regions: global
stipend:
  available: true
  amount_text: "1500–3300 USD" 
  min_usd: 1500         # Use numerical bounds if known
  max_usd: 3300
remote: true
links:
  official: https://summerofcode.withgoogle.com
  apply: https://summerofcode.withgoogle.com/apply
dates:
  - year: 2025
    applications_open: 2025-03-24
    applications_close: 2025-04-08
    program_start: 2025-05-27
    program_end: 2025-08-25
notes: "One of the most competitive programs."
```

## 3. Help Build Features
If you want to help build the Next.js site itself (e.g., adding user accounts, email notifications, a better timeline view):

1. Check open issues labeled `help wanted`.
2. Fork the repo and run `npm install`, then `npm run dev`.
3. Submit a PR!

Thank you for helping students and open-source contributors get paid for their work.
