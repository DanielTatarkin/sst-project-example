# Sample SST App w/ Vue static site

[SST framework](https://sst.dev/)

## Instructions

1. Install [pnpm](https://pnpm.io/) if not installed already
2. Run `pnpm install` in root directory and [packages/frontend](packages/frontend/)

## Notable

- [Line 26 in MyStack.ts](./stacks/MyStack.ts#L26) passes `VITE_API_URL` environment variable to our stack with our API's endpoint url
  - This URL is dynamic depending on the stage we run (local dev or prod)
- [Line 8 in HelloWorld.vue](./packages/frontend/src/components/HelloWorld.vue#L8) reads the `VITE_API_URL` environment variable dynamically passed by SST
