import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fetchData, createUser } from '../features/user/userThunk'

const UserList = () => {
    const [input, setInput] = useState("")

    const { users, loading, error } = useSelector((state) => state.users)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])


    const handleSubmit = (e) => {
        e.preventDefault()


        dispatch(createUser({ name: input }))
        setInput("")
    }

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                <button type='submit'>add</button>
            </form>

            <table>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>name</td>
                    </tr>
                </thead>
                <tbody>
                    {users.map((u) => (
                        <tr key={u.id}>
                            <td>{u.id}</td>
                            <td>{u.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default UserList
