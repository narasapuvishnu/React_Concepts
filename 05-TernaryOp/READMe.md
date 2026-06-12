Ternary Operator in React

The Ternary Operator is a shorthand way of writing an if-else condition.

Syntax:

condition ? expressionIfTrue : expressionIfFalse

Example 1: Rendering Text Conditionally

import { useState } from "react";

const FirstComp = () => {
    const [sampCond, setSampCond] = useState(true);

    return (
        <>
            <p>
                {sampCond ? "True Statement" : "False Statement"}
            </p>
        </>
    );
};

export default FirstComp;

Output
If sampCond is true → True Statement
If sampCond is false → False Statement


Example 2: Rendering Components Conditionally

The ternary operator can also be used to render different components based on a condition.

import { useState } from "react";
import SecondComp from "./SecondComp";
import ThirdComp from "./ThirdComp";

const FirstComp = () => {
    const [sampCond, setSampCond] = useState("true");

    return (
        <>
            {sampCond === "true" ? <SecondComp /> : <ThirdComp />}
        </>
    );
};

export default FirstComp;

Output
If sampCond === "true" → SecondComp is rendered.
Otherwise → ThirdComp is rendered.

Equivalent if-else Statement
if (sampCond === "true") {
    return <SecondComp />;
} else {
    return <ThirdComp />;
}

Key Points:

Used for conditional rendering in React.
Makes code shorter and cleaner than if-else.
Useful for displaying text, JSX elements, or entire components based on conditions.
Best suited for simple conditions. For complex logic, use if-else statements.