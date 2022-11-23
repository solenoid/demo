# To Demonstrate or Demolish

Sometimes showing how something works helps understand it.

Along with the ability to demolish what has already been made.

This was started from an official npm starter turborepo.

## What's inside?

This turborepo uses [npm](https://www.npmjs.com/) as a package manager.
It includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `ui`: a stub React component library shared by both `web` and `docs` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd demo
npm run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd demo
npm run dev
```

### Build Caching

There is a general need for effective build caching. This can be accomplished
with mature tools like [Bazel](https://bazel.build/) or in a more Turbo specific
way currently with [Remote
Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) at the
build artifact level, or the still in alpha [Turbo
Pack](https://turbo.build/pack/docs/core-concepts) which is intended to cache
smaller build artifacts. Both Turbo (repo and pack) approaches seem like they
are very well integrated with [Vercel the company](https://vercel.com/) and the
other products thay have like [Next.js](https://vercel.com/solutions/nextjs). It
isn't clear if the open source tools will stand alone from the other projects
that Vercel is driving forward.
## Useful Links

#### Turbo Repo

- [Pipelines](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)

#### Bazel

- [Bazel Public About](https://bazel.build/about)
- [Bazel Basics](https://bazel.build/basics)
- [When to use Bazel Blog Post](https://earthly.dev/blog/bazel-build/)
- [Stripe Bazel Blog Post](https://stripe.com/blog/fast-secure-builds-choose-two)
- [Caching Explained Blog Post Series](https://sluongng.hashnode.dev/series/bazel-caching-explained)
- [Bazel in CI Blog Post Series](https://sluongng.hashnode.dev/series/bazel-in-ci)
