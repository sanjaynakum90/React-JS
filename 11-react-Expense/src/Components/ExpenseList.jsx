import React, { useContext } from 'react'
import { expense } from './ExpenseContext'

const ExpenseList = () => {
    const { list, update, deleteData } = useContext(expense)
    return (
        <>

            <h1>Expanse Data</h1>
            <table border="1px solid black">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Amount</th>
                        <th>Type</th>
                        <th>Category</th>
                        <th colSpan="2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((l) => {
                        return (
                            <>
                                <tr>
                                    <td>{l.title}</td>
                                    <td>{l.amount}</td>

                                    <td>{l.type}</td>
                                    <td>{l.category}</td>
                                    <td>
                                        <button onClick={() => update(l.id)}>edit</button>
                                    </td>
                                    <td>
                                        <button onClick={() => deleteData(l.id)}>delete</button>
                                    </td>
                                </tr>
                            </>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default ExpenseList