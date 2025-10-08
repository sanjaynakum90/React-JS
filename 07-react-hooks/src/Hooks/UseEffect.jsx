import { useState, useEffect } from "react"

const UseEffect = () => {
    const [person, setperson] = useState([])

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users")

                const data = await response.json()

                if (!data || data.length === 0) {
                    return console.log("data not found");

                }
                setperson(data)
            } catch (error) {
                console.log(error.message);

            }
        }
        fetchUser()
    }, [])

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>username</th>
                        <th>email</th>
                        <th>city</th>
                    </tr>
                </thead>

                <tbody>
                    {person.map((person) => {
                        return (
                        <>
                            <tr key={person.id}>
                                <td>{person.id}</td>
                                <td>{person.name}</td>
                                <td>{person.username}</td>
                                <td>{person.email}</td>
                                <td>{person.address.city}</td>
                            </tr>
                        </>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default UseEffect