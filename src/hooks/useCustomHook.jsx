import { useState } from "react";


function useCounter(initialValue = 0){
    const [count, setCount] = useState(initialValue);

    const increment = (event) => {
        event.preventDefault;
        setCount(count + 1);
    };

    const decrement = (event) => {
        event.preventDefault;
        setCount(count - 1);
    };

    const reset = (event) => {
        event.preventDefault;
        setCount(initialValue);
    }

    const setValue = (value) => {
        setCount(value);
    }

    return {count, increment, decrement , reset, setValue};
}

export default useCounter;