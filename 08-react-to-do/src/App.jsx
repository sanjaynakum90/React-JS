import { useState } from "react";
import InputForm from "./InputForm";
import ListTodo from "./ListTodo";

const App = () => {
  const initialValues = [
    {
      id: 1,
      task: "learn",
      description: "learn react in detail",
    },
    {
      id: 2,
      task: "practice",
      description: "practice react concept",
    },
  ];

  const [todoData, setTodoData] = useState(initialValues);

  const [editVal, setEditVal] = useState(null);

  const addTodo = (input) => {
    if (!input.task || !input.description) {
      return alert("task and description data is required");
    } else if (editVal) {
      setTodoData((prev) =>
        prev.map((t) =>
          t.id === editVal.id
            ? { ...t, task: input.task, description: input.description }
            : t
        )
      );
      setEditVal(null);
    } else {
      const newData = {
        id: new Date().getTime(),
        task: input.task,
        description: input.description,
      };

      // console.log("data", newData);

      setTodoData((prevData) => [...prevData, newData]);
    }
  };

  const editTodo = (id) => {
    const editTodo = todoData.find((t) => t.id === id);

    setEditVal(editTodo);
  };

  const deleteTodo = (id) => {
    const deleteTodo = todoData.filter((t) => t.id !== id);

    setTodoData(deleteTodo);

    // const index = todoData.findIndex((t) => t.id === id);

    // if (index !== -1) {
    //   todoData.splice(index, 1);
    // }
  };

  return (
    <>
      <InputForm addTodo={addTodo} editVal={editVal} />
      <br />
      <ListTodo todo={todoData} editTodo={editTodo} deleteTodo={deleteTodo} />
    </>
  );
};

export default App;