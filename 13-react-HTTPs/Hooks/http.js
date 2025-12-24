import axios from 'axios'
import { useCallback, useState } from 'react'

const useHttp = ({ url, method = "GET" }) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)



    const sendRequest = useCallback(async (body = null, config) => {
        setLoading(true)
        setError(null)


        try {
            const res = await axios({ url, method, data: body, ...config })

            const data = res.data

            setData(data)

            setLoading(false)
            return res.data

        } catch (error) {
            setError(error.massage)

        }
    })


    return {
        loading,
        error,
        sendRequest,
        data
    }
}
export default useHttp;