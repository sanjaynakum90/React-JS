import { createContext, useState } from 'react'
export const expense = createContext({
    add: () => { },
    list: () => { },
    update: () => { },
    delete: () => { },
});


const ExpenseContext = ({ children }) => {
    const initialState = [
        {
            id: 1,
            title: "burger",
            amount: "500",
            category: "food",
            type: "debit",
        },
    ]

    const [data, setData] = useState(initialState)

    const Add = (input) => {
        const newData = {
            id: new Date().getTime(),
            title: input.title,
            amount: input.amount,
            category: input.category,
            type: input.type,
        }
        setData((prev) => [...prev, newData])
    }
    console.log("data", data);


    const value = {
        Add,
    };

    return <expense.Provider value={value}>{children}</expense.Provider>;

}

export default ExpenseContext