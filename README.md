# React Boilerplate

Simple boilerplate code for React to get started with a project right away. All (necessary) configurations have been taken care of. React Router has been included for convenience.

## Usage

Clone the repo use `npm install` to install all the dependecies in a node_modules directory.

## Run

Call `npm run dev` to start the project on localhost. 

## Depedencies

Because there's a lot of overhead when it comes to dependecies with React, here's a concise description of what each depedency in this repo does. Separated between depedencies and devDependencies

### Production Dependencies

- **`react`** The React library
- **`react-dom`** The 'glue' between React and the actual DOM
- **`react-router`** Complete routing library for React. React Router keeps your UI in sync
 with the URL
 
### Development Dependencies

- **`babel-core`** A compiler for transpiling JSX to regular Javascript
- **`babel-loader`** Babel configuration to tell this loader what type of transformations to make on our code
- **`babel-preset-react`** Describes the types of transformations we make (in this case, JSX)
- **`babel-preset-es2015`** Describes the types of transformations we make (in this case, ES6)
- **`babel-preset-stage-0`** Describes the level/stage of ES6 we want to preset (earliest features from stage 0 of 4)
- **`webpack`** Module bundler that takes modules with dependencies turns them into static assets representing those modules
- **`webpack-dev-server`** Serves a webpack app. Updates the browser on changes
- **`html-webpack-plugin`** This is a webpack plugin that simplifies creation of HTML files to serve your webpack bundles

