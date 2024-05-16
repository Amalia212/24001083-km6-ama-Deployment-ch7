import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, setTodo } from "./redux/reducers/todoReducers";

export default function App() {
  const dispatch = useDispatch();
  const [ketikanUser, setKetikanUser] = useState("");
  const data = useSelector((state) => state?.todo);
  const submitData = () => {
    if (ketikanUser === "") {
      alert("Data tidak boleh kosong");
      return;
    }
    dispatch(setTodo(ketikanUser));
  };

  return (
    <div>
      <div>App</div>
      {data?.list?.map((e) => (
        <div key={e} style={{ display: "flex" }}>
          <p>{e}</p>
          <button
            onClick={() => {
              dispatch(removeTodo(e));
            }}
          >
            {" "}
            Delete
          </button>
        </div>
      ))}
      <input
        placeholder="tambah data"
        value={ketikanUser}
        onChange={(e) => {
          setKetikanUser(e?.target?.value);
        }}
      />
      <button
        onClick={() => {
          submitData();
        }}
      >
        Tambah data
      </button>
    </div>
  );
}
