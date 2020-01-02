# Webpack Dev Starter

## Installation

Install npm packages

```sh
npm install
```

## Development

In order to run the webpack dev server run the following command:

```sh
npm run develop
```
After running, app should accessible at http://localhost:8080

## Production

Assets can be built with:

```sh
npm run build
```

A python server can be used to serve the app:

```sh
npm run serve
```

After running, app should accessible at http://localhost:8080

## Testing

Run the following to run the jest testing suite:

```sh
npm run test
```

# Notes

## Build

This is a custom build I wrote. It uses webpack-dev-server with hot reloading enabled for both JS and CSS. I used postcss for styling and CSS modules for generating CSS that's scoped to components. I did not end up using any CSS reset, but rather put every global style in the Layout component: https://github.com/nealfennimore/rcc/blob/master/src/global/components/Layout/styles.pcss. While not something I would ideally do, it's something I did due to time constraints. 

## Authentication

This took an extra step to do basic auth, as we need both the username and the personal access token to get be authorized by the API endpoints. Services are defined here: https://github.com/nealfennimore/rcc/tree/master/src/global/services, and I ended up wrapping the browser fetch API to always return JSON.

The Github username and token ended up being base64 encoded with the browser `btoa` method: https://github.com/nealfennimore/rcc/blob/master/src/global/sagas/github.js#L17.

## Tests 

I added in tests for some selectors, sagas, reducers, and components to give a general approach of testing. My build generates coverage through a lcov report. It'll generate the items after running `npm run test` command, and the lcov report will show in the __coverage__ directory at the root. I've set it up to use both jest and enzyme. 

## Persistent Custom Order

There's quite a few ways to approach this. Ideally, the order would be something given in the same request as the issues being returned. Upon modifying the order of an issue, it should send a request to the server, so that subsequent requests for the same issues, already returns the issues in the proper order. The endpoint for modifying the order would probably have to be separate from the request that returns the issues. 

It would be nice to use something like GraphQL here to make two separate requests, one for the issues and one for the issue order, and then coalesce them so that one response is returned to the user.

