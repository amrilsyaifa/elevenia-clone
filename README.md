# Elevenia Clone

Thanks for taking the time to contribute !

## Setup

Install the dependencies

```shell
yarn
yarn start
```

## Description

This Project using pre-commit [Husky](https://typicode.github.io/husky/#/), [Eslint](https://eslint.org/docs/user-guide/getting-started), [prettier](https://prettier.io/)

Don't forget to setup your IDE with `eslint` and `prettier`.

## Project structure

- **src** this is a root folder, have file root configuration.

- **Contexts** contains global contexts (separated from the redux store)
- **Hooks** contains generic hooks.
- **Layouts** contains building setup layout this application.
- **Libraries** contains the custom library from third party.
- **Pages** contains building blocks for each page. The entry point of a view is used as the root component of each route.
- **Reusables** contains generic components used inside the application.
- **Routers** contains all the config routing.
- **Store** contains config redux.

## Tests

Run tests with `yarn test`.

## Check Lint Format

Run tests with `yarn lint`.

## Check Formater Prettier

Run tests with `yarn format`.

## Issue Fething Data

If have trouble with fetching data, because this app using cors proxy, you shout get permission from web app cors, paste / [click](https://cors-anywhere.herokuapp.com/corsdemo) this link to yout browser, and press `Request temporary access to the demo server`

```
https://cors-anywhere.herokuapp.com/corsdemo
```

![Cors Permission](document/images/cors-permissions.png?raw=true 'Cors Permission')
Guidelines for bug reports:
