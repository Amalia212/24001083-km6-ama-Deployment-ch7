import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIncrement, setDecrement } from "./redux/reducers/counterReducers";

export default function Counter() {
  const counter = useSelector((state) => state?.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <div>Counter</div>
      <div style={{ display: "flex" }}>
        <button
          onClick={() => {
            dispatch(setDecrement());
          }}
        >
          -
        </button>
        <div style={{ margin: "0 20px" }}>{counter.count}</div>
        <button
          onClick={() => {
            dispatch(setIncrement());
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
