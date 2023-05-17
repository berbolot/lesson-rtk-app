import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, random } from "../../store/reducers/countSlice";
import Users from "../Users/Users";

const getRandom = () => Math.floor(Math.random() * 100);

const App = () => {
  const { count } = useSelector((state) => state.countReducer);
  const dispatch = useDispatch();

  const onIncrement = () => dispatch(increment());
  const onDecrement = () => dispatch(decrement());
  const onRNDIncrement = () => dispatch(random(getRandom()));
  const onRNDDecrement = () => dispatch(random(-getRandom()));
  
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrement}>INC</button>
      <button onClick={onDecrement}>DEC</button>
      <button onClick={onRNDIncrement}>+RND</button>
      <button onClick={onRNDDecrement}>-RND</button>

      <hr />
      <Users />
    </div>
  );
};

export default App;
