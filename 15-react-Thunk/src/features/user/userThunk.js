import axios from "axios"
import { requestFail, requestStart, requestSuccess } from "./userSlice";



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