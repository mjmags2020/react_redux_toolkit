import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, getCount, increment, incrementBy } from '../redux/features/counterFeature';

const CounterRedux = () => {
    let counterState = useSelector(getCount);
    const dispatch = useDispatch();

    const clickByIncr = () => {
        dispatch(increment())
    }
    const clickByDec = () => {
        dispatch(decrement())
    }
    const clickByIncrBy5 = () => {
        dispatch(incrementBy())
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <p className="h3 display-2">{counterState}</p>
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

export default CounterRedux
