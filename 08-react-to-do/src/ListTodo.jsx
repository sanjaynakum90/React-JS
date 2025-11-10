import React from "react";

const ListTodo = ({ todo, editTodo, deleteTodo }) => {
    return (
        <>
            <table border="1px solid black">
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Description</th>
                        <th colSpan="2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {todo.map((todo) => {
                        return (
                            <tr key={todo.id}>
                                <td>{todo.task}</td>
                                <td>{todo.description}</td>
                                <td>
                                    <button onClick={() => editTodo(todo.id)}>edit</button>
                                </td>
                                <td>
                                    <button onClick={() => deleteTodo(todo.id)}>delete</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

export default ListTodo;