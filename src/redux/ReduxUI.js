import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "./features/counter/CounterSlice";

function ReduxUI() {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
 
  function handleIncrementClick() {
    dispatch(increment());
  }

  function handleDecrementClick() {
    dispatch(decrement());
  }
  function handleReset() {
    dispatch(reset());
  }

  function handleByAmount() {
    dispatch(incrementByAmount(amount));
  }
  return (
    <>
      <div>
        <button
          className="bg-slate-600 border m-2 p-2 text-white "
          onClick={handleIncrementClick}
        >
          +
        </button>
        <p className="m-2 p-2">count :{count}</p>
        <button
          className="bg-slate-600 border m-2 p-2 text-white "
          onClick={handleDecrementClick}
        >
          -
        </button>
        <button
          className="bg-red-500 border m-2 p-2 text-white "
          onClick={handleReset}
        >
          reset
        </button>
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          className="bg-red-500 border m-2 p-2 text-white "
          onClick={handleByAmount}
        >
          incrementByAmount
        </button>
      </div>
    </>
  );
}

export default ReduxUI;
