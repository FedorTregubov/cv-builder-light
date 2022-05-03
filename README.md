# CV-Builder-light

### About
Simple stateless CV-builder.

Just change all the data and print it or save to PDF.

Available from smartphones also.

## Development

```sh
npm ci && npm run dev
```

## Lint
lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```


## Test
#### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

#### Run End-to-End Tests with [Cypress](https://www.cypress.io/)
_Comming soon..._
```sh
npm run build
npm run test:e2e # or `npm run test:e2e:ci` for headless testing
```

## Build

Type-Check, Compile and Minify for Production

```sh
npm run build
```

## Deploy

I use github-pages, so to deploy you need to run:
```sh
sh ./gh-pages-deploy.sh
```
