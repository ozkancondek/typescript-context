//todo item interface

interface ITodo {
  id: number;
  title: string;
  description: string;
  status: boolean;
}

//type for context

type ContextType = {
  todos: ITodo[];
  saveTodo: (todo: ITodo) => void;
  updateTodo: (id: number) => void;
};

type ContextType2 = Partial<ContextType>;
type ContextType3 = Omit<ContextType, "todos">;
