import { useState } from "react";
import InputForm from "./InputForm";
import ListTodo from "./ListTodo";
import Stats from "./Stats";

const App = () => {
  const initialValues = [
    {
      id: 1,
      task: "learn",
      description: "learn react in detail",
      completed: true,
    },
    {
      id: 2,
      task: "practice",
      description: "practice react concept",
      completed: false,
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
            ? {
              ...t,
              task: input.task,
              description: input.description,
              completed: false,
            }
            : t
        )
      );
      setEditVal(null);
    } else {
      const newData = {
        id: new Date().getTime(),
        task: input.task,
        description: input.description,
        completed: false,
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
  };

  const toggleTaskCompleted = (id) => {
    setTodoData((prevData) =>
      prevData.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const totalTaskData = todoData.length;

  const completedTask = todoData.filter(
    (todo) => todo.completed === true
  ).length;

  const pendingTask = totalTaskData - completedTask;

  return (
    <>
      <InputForm addTodo={addTodo} editVal={editVal} />
      <br />
      <Stats
        total={totalTaskData}
        completed={completedTask}
        pending={pendingTask}
      />

      <br />
      <ListTodo
        todo={todoData}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
        toggleCompleted={toggleTaskCompleted}
      />
    </>
  );
};

export default App;