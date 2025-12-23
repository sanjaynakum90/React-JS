import axios from 'axios'
import  { useCallback, useState } from 'react'

const useHttp = () => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)



    const sendRequest = useCallback(async (config) => {
        setLoading(true)
        setError(null)


        try {
            const res = await axios({ method: "GET", url })

            const data = res.data

            setLoading(false)
            return res.data

        } catch (error) {
            setError(error.massage)

        }
    })


    return {
        loading,
        error,
        sendRequest
    }
}
    export default useHttp;