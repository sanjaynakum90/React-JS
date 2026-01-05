import axios from "axios"
import { addUser, requestFail, requestStart, requestSuccess } from "./userSlice";
import UserList from "../../Components/UserList";



export const fetchData = () => {

    return async (dispatch) => {

        dispatch(requestStart)

        try {

            const res = await axios("https://jsonplaceholder.typicode.com/users");

            const data = res.data

            dispatch(requestSuccess(data))

        } catch (error) {

            dispatch(requestFail(error.message))
        }
    }
}

export const createUser = () => {
    return async (dispatch) => {

        dispatch(requestStart());

        try {
            const res = await axios.post("https://jsonplaceholder.typicode.com/users", user)

            const data = res.data

            dispatch(addUser(data))
        } catch (error) {
            dispatch(requestFail(error.message))
        }
    }
}