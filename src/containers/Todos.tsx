import * as React from "react";

import { useTodo } from "../context/todoContext";
import Todo from "../components/Todo";

//this function is works like a component and lists all of my todos
const Todos = () => {
  // const { todos, updateTodo } = React.useContext(TodoContext) as ContextType;
  const { todos, updateTodo } = useTodo();

  return (
    <div className="list-todo">
      {todos.map((todo: ITodo) => (
        <Todo key={todo.id} updateTodo={updateTodo} todo={todo} />
      ))}
    </div>
  );
};

export default Todos;
