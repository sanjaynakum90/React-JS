import React from "react";
import styles from "./list.module.css";

const ListTodo = ({ todo, editTodo, deleteTodo, toggleCompleted }) => {
    return (
        <>

            <div className={card} style={{ padding: "0" }}>
                <div className={purplebar}>Your Tasks</div>

                {todo.map((todo) => {
                    return (
                        <div className={taskbox} key={todo.id}>
                            <div className={task - info}>
                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => {
                                        toggleCompleted(todo.id);
                                    }}
                                />
                                <h4>{todo.task}</h4>
                                <p>{todo.description}</p>
                            </div>
                            <div className={actions}>
                                <button className={editbtn} onClick={() => editTodo(todo.id)}>Edit</button>
                                <button className={deletebtn} onClick={() => deleteTodo(todo.id)}>Delete</button>
                            </div>
                        </div>
                    )
                })}

            </div>
        </>
    );
};

export default ListTodo;