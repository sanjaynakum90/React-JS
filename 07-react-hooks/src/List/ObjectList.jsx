import React from 'react'

const ObjectList = () => {

    const persons = [
        {
            id: 1,
            name: "Aarav Patel",
            age: 24,
            email: "aarav.patel@example.com",
        },
        {
            id: 2,
            name: "Sneha Sharma",
            age: 22,
            email: "sneha.sharma@example.com",
        },
        {
            id: 3,
            name: "Rahul Mehta",
            age: 26,
            email: "rahul.mehta@example.com",
        },
        {
            id: 4,
            name: "Priya Singh",
            age: 23,
            email: "priya.singh@example.com",
        },
        {
            id: 5,
            name: "Rohan Desai",
            age: 25,
            email: "rohan.desai@example.com",
        },
        {
            id: 6,
            name: "Anjali Verma",
            age: 21,
            email: "anjali.verma@example.com",
        },
        {
            id: 7,
            name: "Karan Joshi",
            age: 27,
            email: "karan.joshi@example.com",
        },
        {
            id: 8,
            name: "Neha Gupta",
            age: 24,
            email: "neha.gupta@example.com",
        },
        {
            id: 9,
            name: "Vikram Shah",
            age: 28,
            email: "vikram.shah@example.com",
        },
        {
            id: 10,
            name: "Divya Iyer",
            age: 23,
            email: "divya.iyer@example.com",
        },
    ];


    return (
        <>

        <table>
            <thead>
                <th>id</th>
                <th>Name</th>
                <th>age</th>
                <th>email</th>
            </thead>

            <tbody>
                {persons.map((user, id)=>{
                    return(
                        <>
                        <tr key={id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.email}</td>
                        </tr>
                        </>
                    )
                })}
            </tbody>
        </table>
        </>
    )
}

export default ObjectList