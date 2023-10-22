import useCounter from "../hooks/useCustomHook";
import ErrorBoundaryTest from "../error/ErrorBoundaryTest";

function CounterComponent(){
    const {count, increment, decrement, reset, setValue} = useCounter();

    return(
        <div>
            <ErrorBoundaryTest>
                <h1> A Simple Counter</h1>
                <h3>{count}</h3>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
                <input 
                    type="number"
                    value={count}
                    onChange={(e)=>setValue(parseInt(e.target.value))}
                />
            </ErrorBoundaryTest>
        </div>
    )
}

export default CounterComponent;