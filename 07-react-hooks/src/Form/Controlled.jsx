import React, { useState } from "react";

const Controlled = () => {
    //   const [task, setTask] = useState("");

    //   const [description, setDescription] = useState("");

    const [formData, setFormData] = useState({
        task: "",
        description: "",
    });

    const handleChange = (field, e) => {
        setFormData((formData) => {
            return {
                ...formData,
                [field]: e.target.value,
            };
        });
    };

    return (
        <>
            <form action="">
                <input
                    type="text"
                    placeholder="task"
                    value={formData.task}
                    onChange={(e) => handleChange("task", e)}
                />
                <br />
                <br />
                <input
                    type="text"
                    placeholder="description"
                    value={formData.description}
                    onChange={(e) => handleChange("description", e)}
                />
            </form>

            <h1>{formData.task}</h1>
            <h1>{formData.description}</h1>
        </>
    );
};

export default Controlled;