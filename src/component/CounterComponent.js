import React from "react";
import useCounter from "../hooks/useCustomHook";

function CounterComponent(){
    const {count, increment, decrement, reset, setValue} = useCounter();

    return(
        <div>
            <h1> A Simple Counter</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <input 
                type="number"
                value={count}
                onChange={(e)=>setValue(parseInt(e.target.value))}
            />
        </div>
    )
}

export default CounterComponent;