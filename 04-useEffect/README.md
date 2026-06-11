# React useState() and useEffect()

## Infinite Loop with useState()

In React, updating a state variable causes the component to re-render.

Example:

```jsx
const [name, setName] = useState("balu");

if (name === "balu") {
    setName("Rajesh");
} else {
    setName("Vignesh");
}
```

### What happens?

1. Initial render → `name = "balu"`
2. Condition Satisified
3. React updates state and re-renders
4. Now `name = "Rajesh"`    
5. `setName("Vignesh")` is called
6. React re-renders again
7. The process continues indefinitely

This results in the error:

```text
Too many re-renders. React limits the number of renders to prevent an infinite loop.
```

### Why does it happen?

Because `setState()` is being called directly inside the component body (during rendering).

---

# Using useEffect()

`useEffect()` allows us to run code after React has rendered the component.

Example:

```jsx
useEffect(() => {
    if (name === "balu") {
        setName("Dinesh");
    } else {
        setName("badri");
    }
}, []);
```

## Empty Dependency Array (`[]`)

An empty dependency array means:

```jsx
useEffect(() => {
    // code
}, []);
```

The effect runs only once after the initial render.

### Execution Flow

1. Initial render → `name = "balu"`
2. Component is displayed
3. `useEffect()` runs
4. `setName("badri")` is called (because `"balu" !== "bal"`)
5. Component re-renders
6. Effect does not run again because dependency array is empty

Final Output:

```text
Myself, badri
```

---

# Dependency Array

The dependency array controls when the effect should run.

## Run Once

```jsx
useEffect(() => {
    // code
}, []);
```

Runs only after the first render.

## Run When State Changes

```jsx
useEffect(() => {
    // code
}, [name]);
```

Runs:

* After the first render
* Whenever `name` changes

Example:

```jsx
useEffect(() => {
    if (name === "bal") {
        setName("Dinesh");
    } else {
        setName("badri");
    }
}, [name]);
```

Flow:

```text
balu → badri
badri → badri
```

When React sees that the new state value is the same as the current value (`badri`), it skips further re-renders.

---

# Important Note

`useEffect()` does not automatically prevent infinite loops.

This can still create a loop:

```jsx
useEffect(() => {
    setName(name + "a");
}, [name]);
```

Because every update changes `name`, which triggers the effect again.

Therefore:

* `useEffect()` runs side effects after rendering.
* The dependency array controls when the effect runs.
* Infinite loops can still happen if the effect continuously updates its own dependencies.
