import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fetchData } from '../features/user/userThunk'

const UserList = () => {

    const { users, loading, error } = useSelector((state) => state.users)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])
    if (loading) return <p>loading</p>


    if (loading) return <p>{error}</p>

    return (
        <>
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