import * as React from "react";
import { useRef } from "react";
import { TodoContext, useTodo } from "../context/todoContext";

const AddTodo: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  //take saveTodo from context
  const { saveTodo } = useTodo();
  const [formData, setFormData] = React.useState<ITodo | {}>();

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const handleSaveTodo = (e: React.FormEvent, formData: ITodo | any) => {
    e.preventDefault();
    saveTodo(formData);
    formRef?.current?.reset();

    /*   Array.from(e.currentTarget.getElementsByTagName("input")).map(
      (i) => (i.value = "") */
  };

  return (
    <form
      ref={formRef}
      className="Form"
      onSubmit={(e) => handleSaveTodo(e, formData)}
    >
      <div>
        <div>
          <label htmlFor="name">Title</label>
          <input onChange={handleForm} type="text" id="title" />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input onChange={handleForm} type="text" id="description" />
        </div>
      </div>
      <button disabled={formData === undefined ? true : false}>Add Todo</button>
    </form>
  );
};

export default AddTodo;
