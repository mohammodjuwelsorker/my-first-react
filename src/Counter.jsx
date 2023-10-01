import { useState } from "react";
import './Counter.css'

export default function Counter() {
    const [count, setCount] = useState(0);

    function addHandler() {
        const newCount = count + 1;
        setCount(newCount)
    }

    function reduceHandler () {
        const newCount = count - 1;
        setCount(newCount)
    }

    return (
        <div className="counter-style">
            <h3>counter: {count}</h3>
            <button onClick={addHandler}>add</button>
            <button onClick={reduceHandler}>reduce</button>
        </div>

    )
}