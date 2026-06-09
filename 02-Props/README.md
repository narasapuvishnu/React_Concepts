<<<<<<< HEAD
# React Props Example

## Introduction

This project demonstrates how to use **Props** in React.

Props (Properties) are used to pass data from a parent component to child components.

## Project Structure

02-Props/
│
├── App.jsx
├── FirstComp.jsx
├── SecondComp.jsx
├── ThirdComp.jsx
├── FourthComp.jsx
├── FifthComp.jsx

## App Component

The `App` component acts as the parent component and passes a `name` prop to each child component.

```jsx
<FirstComp name="vijay" />
<SecondComp name="vardhan" />
<ThirdComp name="balu" />
<FourthComp name="kumar" />
<FifthComp name="reddy" />

Child Components

Each child component receives the prop and displays it.

Example:

const FirstComp = (props) => {
  return <div>{props.name}</div>;
};

Output

    vijay
    vardhan
    balu
    kumar
    reddy

Key Concepts Learned

    Creating React Components
    Using Functional Components
    Passing Data with Props
    Accessing Props using props.name
    Parent to Child Communication
    Conclusion

Props make React components reusable and dynamic by allowing data to be passed from one component to another.


This is concise, beginner-friendly, and matches the example you've implemented.
=======
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
>>>>>>> df024f03bd89565bc1bb206af79bcb4fd9463063
