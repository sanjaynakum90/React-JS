import axios from "axios";
import { useCallback, useState } from "react";

const useHttp = ({ url, method = "GET" }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(
    async (config = {}) => {
      setLoading(true);
      setError(null);

      try {
        const res = await axios({
          url: config.url || url,
          method: config.method || method,
          data: config.body,
          ...config
        });

        setData(res.data);
        return res.data;
      } catch (error) {
        setError(error.message || "An error occurred");
        throw error;
      } finally {
        setLoading(false);
      }
    },
    [url, method]
  );

  return {
    data,
    loading,
    error,
    sendRequest,
  };
};

export default useHttp;