# React Components

## Overview

Components are the building blocks of a React application. They allow us to split the UI into independent, reusable pieces.

## Concepts Learned

* Components are reusable pieces of UI.
* A React application is built using multiple components.
* Components help organize code and improve maintainability.
* Nesting of components is allowed, meaning one component can be rendered inside another component.
* Functional components are JavaScript functions that return JSX.


## Files

### App.jsx

* Main component of the application.
* Imports and renders the `Sub_Comp` component.

### Footer.js

* Contains the `Sub_Comp` functional component.
* Returns JSX elements describing React component concepts.
* Exported as the default export.

## Code Flow

1. `App.jsx` imports `Sub_Comp` from `Footer.js`.
2. `App.jsx` renders `<Sub_Comp />`.
3. React executes `Sub_Comp()`.
4. JSX returned by `Sub_Comp` is displayed in the browser.

## Output

Components are Building blocks of a React application

Group of Elements are called Components

Components are Reusable

Nesting of Components is allowed

## Key Takeaways

* Components make code reusable.
* Components can be nested inside other components.
* Functional components are simple JavaScript functions that return JSX.
* React applications are composed of multiple components working together.
