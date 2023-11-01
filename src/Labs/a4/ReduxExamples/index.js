import React from "react";
import HelloReducer from "./HelloRedux";
import CounterReducer from "./CounterRedux";
import AddReducer from "./AddRedux";
import TodoList from "./todos/TodoList";

const ReduxExamples = () => {
  return(
    <div>
      <h2>Redux Examples</h2>
      <HelloReducer/>
      <CounterReducer/>
      <AddReducer/>
      <TodoList/>
    </div>
  );
};

export default ReduxExamples;