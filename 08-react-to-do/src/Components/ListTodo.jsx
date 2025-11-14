import React from "react";
import styles from "./list.module.css";

const ListTodo = ({ todo, editTodo, deleteTodo, toggleCompleted }) => {
  return (
    <div className={styles.container}>
      <div className={styles.headerBar}>Your Tasks</div>

      {todo.length === 0 ? (
        <div className={styles.empty}>No tasks yet — add one above.</div>
      ) : (
        <div className={styles.list}>
          {todo.map((t) => (
            <div
              key={t.id}
              className={`${styles.row} ${t.completed ? styles.completedRow : ""}`}
            >
              <div className={styles.checkboxWrap}>
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  checked={t.completed}
                  onChange={() => toggleCompleted(t.id)}
                />
              </div>

              <div className={styles.content}>
                <div className={styles.taskTitle}>{t.task}</div>
                <div className={styles.taskDesc}>{t.description}</div>
              </div>

              <div className={styles.actions}>
                <button
                  className={`${styles.btnSmall} ${styles.editBtn}`}
                  onClick={() => editTodo(t.id)}
                >
                  Edit
                </button>
                <button
                  className={`${styles.btnSmall} ${styles.deleteBtn}`}
                  onClick={() => deleteTodo(t.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListTodo;