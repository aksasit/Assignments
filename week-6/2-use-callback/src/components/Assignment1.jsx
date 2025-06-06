import {memo, useCallback, useState} from "react";

// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.

export function Assignment1() {
    const [count, setCount] = useState(0);

    // Your code starts here
    const handleIncrement = useCallback(() =>  {
        // This count no longer depends upon the above count , now we are getting the previous value and updating.
        setCount((count) => count + 1)
    }, [])

    const handleDecrement = useCallback(() => {
        setCount((count) => count - 1)
    }, [])
    

    return (
        <div>
            <p>Count: {count}</p>
            <CounterButtons onIncrement={handleIncrement} onDecrement={handleDecrement} />
        </div>
    );
}

// eslint-disable-next-line react/display-name, react/prop-types
const CounterButtons = memo(({ onIncrement, onDecrement }) => (
    <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
    </div>
));
