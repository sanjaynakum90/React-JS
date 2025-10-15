import React, { useState } from "react";

const WorkingWithForms = () => {
    //   const [task, setTask] = useState("");

    //   const [description, setDescription] = useState("");

    const [formData, setFormData] = useState({
        task: "",
        description: "",
    });

    const [saveFormData, setSaveFormData] = useState([]);

    const handleChange = (field, e) => {
        setFormData((formData) => {
            return {
                ...formData,
                [field]: e.target.value,
            };
        });
    };

    const handleSubmitData = (e) => {
        e.preventDefault();

        setSaveFormData((data) => [...data, formData]);
        setFormData({ task: "", description: "" });
    };

    console.log("save", saveFormData);

    return (
        <>
            <form onSubmit={handleSubmitData}>
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
                <button type="submit">submit</button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {saveFormData.map((data, index) => {
                        return (
                            <>
                                <tr key={index}>
                                    <td>{data.task}</td>
                                    <td>{data.description}</td>
                                </tr>
                            </>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

export default WorkingWithForms;