# Hycord Monorepo

This repository holds all of my public packages.
All packages are published under the @ignhycord prefix on NPM

### Apps and Packages

- `test`: A basic app used to test and debug packages
- `@hycord/logger`: a basic logging library shared by all of my applications and packages
- `@hycord/math`: a basic math library shared by all of my applications and packages
- `@hycord/neural`: a basic neural network library to mess around with AI
- `@hycord/image`: a basic canvas handling API which simplifies creating, drawing, and rendering canvases in node
- `@hycord/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@hycord/typescript-config`: `tsconfig.json`s used throughout the monorepo
- `@hycord/example`: an example package that can be copied to scaffold a new package.

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools setup:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
pnpm dev
```

### Publishing packages

To publish a package just run the following command:

```
pnpm pub
```

This will build and lint all packages, generate a changelog, increment versions, then publish to NPM.
