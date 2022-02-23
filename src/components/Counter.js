import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const clickByIncr = () => {
        setCount(count + 1);
    }
    const clickByDec = () => {
        setCount(count - 1);
    }
    const clickByIncrBy5 = () => {
        setCount(count + 5);
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <p className="h3 display-2">{count}</p>
                            <button className="btn btn-success m-1" onClick={clickByIncr}>Increment</button>
                            <button className="btn btn-warning m-1" onClick={clickByDec}>Decrement</button>
                            <button className="btn btn-danger m-1" onClick={clickByIncrBy5}>Increment 5</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter
