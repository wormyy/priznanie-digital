# [priznanie.digital](https://priznanie.digital/)

![Deployment](https://github.com/priznanie-digital/priznanie-digital/workflows/Deployment/badge.svg)

Tax filing application for self employed professionals in Slovakia.

**Daňové priznanie pre živnostníkov s paušálnymi výdavkami (DPFO typ B)**

Daňové priznanie je jeden z najväčších byrokratických strašiakov podnikateľov. A pritom pri zadaní pár jednoduchých
údajov si ho môže vyplniť ktokoľvek za pár minút bez väčších problémov. Chceme takto malými krokmi uľahčiť život
státisicom živnostníkov. Ak ste SZČO (živnostník) a uplatňujete si paušálne výdavky, tak vám pomôžeme vyplniť daňové
priznanie (k dani z príjmov fyzickej osoby, typ B) a tiež vás detailne prevedieme aj procesom podania na stránkach
Finančnej správy.

## Project details

Tech stack:

* written in [Typescript](https://www.typescriptlang.org/), styles via [css-modules](https://github.com/css-modules/css-modules)
* design based on [GOV.UK design system](https://design-system.service.gov.uk/), modified for [navody.digital](https://github.com/slovensko-digital/navody.digital)
* based on [Next.js](https://nextjs.org/).
* financial calculations via [decimal.js](https://mikemcl.github.io/decimal.js/).
* forms via [formik](https://formik.org/)
* testing via [jest](https://jestjs.io/) and [cypress](https://www.cypress.io/) (with [cypress dashboard](https://dashboard.cypress.io/projects/ivst8i))
* code formatted via [prettier](https://prettier.io/)
* PDF generated by [hummus](https://github.com/galkahana/HummusJS)
    * ⚠️ library deprecated, refactoring welcome
    * unfortunatelly the more popular [PDFKit library](https://github.com/foliojs/pdfkit) has [no support for editing existing files](https://github.com/foliojs/pdfkit/issues/712)

**To contribute** fork [this Github repo](https://github.com/priznanie-digital/priznanie-digital) and create a pull request.
If you are not familiar with the process [see this guide](https://github.com/firstcontributions/first-contributions/blob/master/README.md).


## How to develop

In your terminal, run the following command:

```bash
npm run dev
```

Open http://localhost:3000/ in browser.

## Run tests

Unit tests via [jest](https://jestjs.io/):

```bash
npm test
```

Functional tests via [Cypress](https://www.cypress.io/):

```bash
npm run cy:run
```

Run functional tests interactively:

```bash
npm run cy:open
```

Before committing your code don't forget to format and check syntax:

```bash
npm run prettier
npm run lint
npm run check:ts
```

## Environment variables

Add `.env` file with env variables:

* *autoformtoken* (for [autocomplete api](https://ekosystem.slovensko.digital/sluzby/autoform))
* *sendinbluetoken* (for sending emails via 3rd party service [sendinblue](https://www.sendinblue.com/))
* *sendinblue_tpl_postpone* (template id for sending postpone form to email)
* *sendinblue_tpl_tax* (template id for sending tax form details to email)
* *sendinblue_list_id* (id of list to save users into if they opt into newsletter)

## Environments

* staging: https://priznanie.staging.slovensko.digital/
* production: https://priznanie.digital/

## Infrastructure

* Github repository: https://github.com/priznanie-digital/priznanie-digital
* Deployed to staging env via [Github Action - Deployment](https://github.com/priznanie-digital/priznanie-digital/actions?query=workflow%3ADeployment)

## Pull request checks

Tested via [Github Action - Quality Assurance](https://github.com/priznanie-digital/priznanie-digital/actions?query=workflow%3A%22Quality+Assurance%22):

* Lint and Typescript check:
  ```bash
  npm run lint
  npm run check:ts
  ```
* Unit tests:
    ```bash
    npm run test -- --ci
    ```
* Functional tests:
    * build and start server:
    ```bash
    WITH_DEBUG=true npm run build
    npm start
    ```
    * run functional tests via Cypress - [cypress-io/github-action](https://github.com/cypress-io/github-action)
    * runs in parallel and reports to [Cypress Dashboard](https://dashboard.cypress.io/projects/ivst8i)


## Talk to us

You can [reach us on Slovensko.Digital slack](http://slack.slovensko.digital/), channel _#priznanie_digital_.
