```markdown
# OSS Programs

A curated, up-to-date directory of open source opportunities including mentorship programs, grants, fellowships, hackathons, and internships.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat&logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green?style=flat)

---

## Features

* **Deadline Tracking:** Never miss an application deadline
* **Search & Filter:** Find programs by category, stipend, eligibility, and more
* **Calendar Export:** Export deadlines to your favorite calendar app
* **Global Coverage:** Programs from around the world
* **Stipend Info:** See compensation details at a glance

## Getting Started

```bash
# Clone the repository
git clone [https://github.com/OWASP-STUDENT-CHAPTER/oss-programs.git](https://github.com/OWASP-STUDENT-CHAPTER/oss-programs.git)
cd oss-programs

# Install dependencies
npm install

# Run development server
npm run dev

```

Open `http://localhost:3000` to view the site.

## Supported Programs

* Google Summer of Code (GSoC)
* Outreachy
* MLH Fellowship
* LFX Mentorship
* Hacktoberfest
* Mozilla Fellowship
* NLnet NGI Zero
* And more...

## Tech Stack

* **Next.js 16** - React framework
* **TypeScript** - Type safety
* **Tailwind CSS** - Styling
* **shadcn/ui** - UI components
* **Fuse.js** - Fuzzy search

---

## OSS Documentation & Contribution Guide

This directory is an actively maintained open-source project by the OWASP Student Chapter. We rely on community contributions to keep program deadlines, stipends, and links accurate and up to date.

We welcome contributions from developers, students, and open-source enthusiasts. Please review the guidelines below before submitting a Pull Request (PR).

### Adding or Updating a Program

If you are adding a new program or updating an existing one, ensure the information is verified against the program's official website. You will likely need to update the relevant data file (e.g., in the `/data` or `/content` directory).

Please ensure your submission includes:

* **Program Name**
* **Category:** Mentorship, Grant, Hackathon, Fellowship
* **Description:** Keep it under 3 sentences
* **Eligibility Requirements:** e.g., "University students", "Global", "Underrepresented groups"
* **Stipend / Compensation:** Specify currency if applicable, or state "Unpaid"
* **Application Deadline:** Use standard ISO format: YYYY-MM-DD
* **Official URL**

### Local Development Workflow

1. **Fork the repository:** Create your own copy of the project on GitHub.
2. **Clone your fork locally:**
```bash
git clone [https://github.com/YOUR-USERNAME/oss-programs.git](https://github.com/YOUR-USERNAME/oss-programs.git)
cd oss-programs

```

3. **Create a feature branch:** Isolate your changes.
```bash
git checkout -b update/gsoc-2026-deadlines

```

4. **Run the development server:** Ensure you run `npm install` and then `npm run dev` to test your changes locally at `http://localhost:3000`.

---

5. **Format and Lint:** If you are modifying TypeScript or React components, ensure your code passes the project's formatting and linting rules.
```bash
npm run lint

```

6. **Commit your changes:** Write a clear, concise commit message.
```bash
git commit -m "Update GSoC 2026 application deadlines and stipend amounts"

```

7. **Push to your branch:**
```bash
git push origin update/gsoc-2026-deadlines

```

8. **Open a Pull Request:** Navigate to the original repository and submit your PR. In the description, clearly state what program you added or what dates you updated, and include a link to the official source for verification.

### Good First Issues

If you want to contribute code (UI improvements, search optimizations, etc.) but don't know where to start, check the "Issues" tab on GitHub and filter by the `good first issue` or `help wanted` labels.

---

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.

## Acknowledgments

Built by the OWASP Student Chapter to help students and contributors find open source opportunities.

```
