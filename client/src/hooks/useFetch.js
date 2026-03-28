import { useState, useEffect, useCallback } from "react";
import API from "../services/api";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await API.get(url);
      setData(response.data.data);
    } catch (err) {
      setError(err.response?.data?.message || err.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    if (url) fetchData();
  }, [url, fetchData]);

  return { data, loading, error, refetch: fetchData };
};

export default useFetch;
