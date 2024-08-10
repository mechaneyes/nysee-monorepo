# NYSee Monorepo

NYSee.nyc has become my home for the latest creative projects I'm working on. 

This is setup via a monorepo so it can host distinct projects, allowing others to have access for collaboration.

<br>

## NYSee Blog

One of the apps within this monorepo is a blog for NYSee. Right now there's one, there will be more for planned projects.

The WordPress blogs are setup using Cloudways:
https://unified.cloudways.com/


<br>

## NYSee Home



<br>

## Details on Vercel's Turborepo starter

Built using Vercel's Next.js [Turborepo starter](https://github.com/vercel/turbo/tree/main/examples/with-yarn).

This Turborepo includes the following packages/apps:

### Packages

- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).


<br>

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
