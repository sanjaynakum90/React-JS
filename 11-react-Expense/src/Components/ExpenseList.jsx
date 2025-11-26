import React, { useContext } from 'react'
import { expense } from './ExpenseContext'

const ExpenseList = () => {
    const { list } = useContext(expense)
    return (
        <>

            <h1>Expase Data</h1>
            <table border="1px solid black">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Amount</th>
                        <th>Type</th>
                        <th>Category</th>
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