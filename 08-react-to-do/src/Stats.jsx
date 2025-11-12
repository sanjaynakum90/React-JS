import React from "react";

const Stats = ({ pending, completed, total }) => {
    return (
        <>
            <table border="2px solid black">
                <thead>
                    <tr>
                        <th>Pending Task</th>
                        <th>Completed Task</th>
                        <th>Total Task</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{pending}</td>
                        <td>{completed}</td>
                        <td>{total}</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default Stats;