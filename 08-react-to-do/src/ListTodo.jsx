import React from "react";

const ListTodo = ({ todo }) => {
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
                                    <button>edit</button>
                                </td>
                                <td>
                                    <button>delete</button>
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