# State Management

State Management is the process of storing and updating data in a React application.

## useState Hook

* `useState()` is a built-in React Hook.
* It is used to create and manage state in functional components.
* Hooks were introduced in React 16.8.
* When state changes, React automatically updates the UI.

### Syntax

```jsx
const [state, setState] = useState(initialValue);
```

### Example

```jsx
import { useState } from 'react';

function StateMgm() {
  const [name, setName] = useState("Balu");

  return (
    <>
      <h1>State Management</h1>
      <h1>Name: {name}</h1>
    </>
  );
}

export default StateMgm;
```
