[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# Auto Version Management

This repo is a playground for experimenting and implementing the following:

- Automatic version management
- Commit Lint
- Any necessary supporting actions (such as verifying a PR's title)

### Automatic Version Management

The style of versioning I chose is `release.feature.patch` where:

- `release`: is increased once per release to production
- `feature`: is cumulative (i.e. never resets) and is updated whenever a
  feature is merged
- `patch`: is used for almost everything else. This is reset when release is
  bumped

A workflow runs whenever a PR is merged into develop and updates the version
depending on merge commit.

### PR Title checker

Checking that the title of the PR is narrowed down to certain keywords is
neceessary beacuse version management relies on detecting keywords in the merge
commit message.

for example, `feat` causes a version bump in the middle number, and `fix`
causes a version bump in the rightmost number.

The config for the PR title checker is under `.github/pr-title-checker-config.json`.

The workflow is found under `.github/workflows/verify-pr-title.yml`

### Manual release to production (but still automated version bumping)

Under `.github/workflows/create-release.yml` is a script that can be run from
the actions tab on the repo's github page.

This causes a bump in the release version, updates develop, and fast-forwards
main to match develop.

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or yarn dev # or pnpm dev # or bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page
auto-updates as you edit the file.

This project uses
[`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API. [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
