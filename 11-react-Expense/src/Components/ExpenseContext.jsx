import { createContext, useState } from "react";

export const expense = createContext({
    add: () => { },
    list: [],
    update: () => { },
    deleteData: () => { },
    editValue: null,
    Credit: 0,
    Debit: 0,
    balance: 0,
});

const ExpenseContext = ({ children }) => {
    const initialState = [
        {
            id: 1,
            title: "Burger",
            amount: "500",
            category: "food",
            type: "debit",
        },
    ];

    const [data, setData] = useState(initialState);
    const [editValue, setEditValue] = useState(null);

    const Add = (input) => {
        if (!input.title || !input.amount || !input.category || !input.type) {
            alert("All fields are required");
            return;
        }

        if (editValue) {
            setData((prev) =>
                prev.map((d) =>
                    d.id === editValue.id ? { ...d, ...input } : d
                )
            );
            setEditValue(null);
        } else {
            const newData = { id: Date.now(), ...input };
            setData((prev) => [...prev, newData]);
        }
    };

    const update = (id) => {
        const item = data.find((d) => d.id === id);
        setEditValue(item);
    };

    const deleteData = (id) => {
        setData((prev) => prev.filter((d) => d.id !== id));
    };

    const Credit = data
        .filter((d) => d.type === "credit")
        .reduce((acc, curr) => acc + Number(curr.amount), 0);

    const Debit = data
        .filter((d) => d.type === "debit")
        .reduce((acc, curr) => acc + Number(curr.amount), 0);

    const balance = Credit - Debit;

    const value = {
        Add,
        deleteData,
        update,
        list: data,
        editValue,
        Credit,
        Debit,
        balance,
    }

    return <expense.Provider value={value}>{children}</expense.Provider>

};

export default ExpenseContext;
