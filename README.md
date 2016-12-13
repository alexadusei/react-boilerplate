# React Boilerplate

Simple boilerplate code for React to get started with a project right away. All (necessary) configurations have been taken care of. React Router has been included for convenience.

## Usage

Clone the repo using `npm install` to install all the dependecies to a *node_modules* directory.

## Run

Use `npm run dev` to start the project on localhost. 

## Dependencies

Because there's a lot of overhead when it comes to dependecies with React, here's a concise description of what each depedency in this repo does. Separated between dependencies and devDependencies

### Production Dependencies

- **`react`** The React library
- **`react-dom`** The 'glue' between React and the actual DOM
- **`react-router`** Complete routing library for React. React Router keeps your UI in sync
 with the URL
 
### Development Dependencies

- **`babel-core`** A compiler for transpiling JSX to regular Javascript
- **`babel-loader`** Babel configuration to tell this loader what type of transformations to make on your code
- **`babel-preset-react`** Describes the types of transformations we make (in this case, JSX)
- **`babel-preset-es2015`** Describes the types of transformations we make (in this case, ES6)
- **`babel-preset-stage-0`** Describes the stage of ES6 we want to preset (earliest features are from stage 0)
- **`webpack`** Module bundler that takes modules with dependencies and turns them into static assets representing those modules (it can minify your code into one file for production)
- **`webpack-dev-server`** Serves your project locally for testing. It automatically updates your browser when edited
- **`html-webpack-plugin`** This is a webpack plugin that simplifies creation of HTML files to serve your webpack bundles
