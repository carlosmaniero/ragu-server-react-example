# Hello React Microfrontend

A micro-frontend to say Hello, World!

## Running

```bash
npm install
```

### Development server

```bash
npm run ragu:dev
```

### Production server

```bash
npm run ragu:build
npm run ragu:start
```

## Example 1: Simple hello world

Renders a React component saying hello:

[component directory](./ragu-components/hello-world)

[Component Preview](http://localhost:3100/preview/hello-world)

[Component URL](http://localhost:3100/components/hello-world)


## Example 2: Hello, world with props

Renders a React component saying hello for a given name:

[component directory](./ragu-components/hello-world-props)

[Component Preview](http://localhost:3100/preview/hello-world-props?name=World)

[Component URL](http://localhost:3100/components/hello-world-props?name=World)

## Example 2: Hello, world with state

Renders a React component saying hello for a pokemon a given pokemon id:

[component directory](./ragu-components/hello-pokemon-state)

[Component Preview](http://localhost:3100/preview/hello-pokemon-state?id=1)

[Component URL](http://localhost:3100/components/hello-pokemon-state?id=1)

The state is loaded from the PokéAPI. It is nice that the state is always fetched from the server. 
It means the client receives the component completely resolved.