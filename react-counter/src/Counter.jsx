import React, {useState} from 'react';
export default function Counter(){
    //useState hook for updating variables for stateful variables
    //function components
    const [count, setCount] = useState(0) // 0 default value

    //function to increment state count
    const incrementCount = () => {
        setCount(c => c +1) //count => count + 1. for setCoun that is invoked. Updater
    }
    const resetCount = () => { //reset count
        setCount(c => c=0)
    }
    const decrementCount = () => { //decrement
        setCount(c => c - 1)
    }

    return(
        <>
        <div className="container">
            <p className="counter-container">
            Counter: <br />
            {count}
            </p>
            &nbsp;
            <button className="button-container-decrement" onClick={decrementCount}>Decrement</button>
            <button className="button-container-reset" onClick={resetCount}>Reset</button>
            <button className="button-container-increment" onClick={incrementCount}>Increment</button>
        </div>
        </>
    )
}