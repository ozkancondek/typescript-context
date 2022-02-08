import * as React from "react";

//create context with contextType

export const TodoContext = React.createContext<ContextType | null>(null);

const TodoProvider: React.FC<React.ReactNode> = ({ children }) => {
  //use ITodo interface
  const [todos, setTodos] = React.useState<ITodo[]>([
    {
      id: 1,
      title: "post 1",
      description: "this is a description",
      status: false,
    },
    {
      id: 2,
      title: "post 2",
      description: "this is a description",
      status: true,
    },
  ]);

  //save a new  todo function. Tkes a todo as parameter and returns  void

  const saveTodo = (todo: ITodo) => {
    //new todo will fallow Itodo interface
    const newTodo: ITodo = {
      id: Math.random(), // not really unique - but fine for this example
      title: todo.title,
      description: todo.description,
      status: false,
    };
    //add new todo to todo array
    setTodos([...todos, newTodo]);
  };

  //update my todo item function. takes id in number type as parameter and returns void

  const updateTodo = (id: number) => {
    //filter all todos and find todo which has given id
    todos.filter((todo: ITodo) => {
      if (todo.id === id) {
        //set its status as true
        todo.status = true;
        setTodos([...todos]);
      }
    });
  };

  return (
    <TodoContext.Provider value={{ todos, saveTodo, updateTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

//context custom hook
export const useTodo = () => {
  const todoData = React.useContext(TodoContext) as ContextType;
  if (!todoData) {
    throw new Error("useTodo need to used in TodoProvider");
  }
  return todoData;
};

export default TodoProvider;
