import React, { useEffect, useState } from "react";
import styles from "./inputForm.module.css";

const InputForm = ({ addTodo, editVal }) => {
    const [input, setInput] = useState({
        task: "",
        description: "",
        completed: false,
    });

    useEffect(() => {
        editVal ? setInput(editVal) : null;
    }, [editVal]);

    const handleInputData = (identifier, e) => {
        setInput((prev) => {
            return {
                ...prev,
                [identifier]: e.target.value,
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(input);

        setInput({ task: "", description: "", completed: false });
    };

    return (
        <>
            <div className={styles.card}>
                <h2>Add New Task</h2>
                <form onSubmit={handleSubmit} className={styles.submit}>
                    <label htmlFor="task">Task Title</label>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="task"
                        value={input.task}
                        onChange={(e) => handleInputData("task", e)}
                    />
                    <label htmlFor="description">Description </label>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="description"
                        value={input.description}
                        onChange={(e) => handleInputData("description", e)}
                    />

                    <button type="submit" className={styles.btn}>{editVal ? "update" : "add"}</button>
                </form>
            </div>

        </>
    );
};

export default InputForm;