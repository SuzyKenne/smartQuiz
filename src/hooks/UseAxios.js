import axios from "axios";
import { useEffect, useState } from "react";

axios.defaults.baseURL ='https://opentdb.com/';


function UseAxios ({url}) {

    const [response, setResponse] = useState(null);
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = () => {
          axios
            .get(url)
            .then((res) => {
              console.log('API Request URL:', url);
              console.log('API Response:', res.data);
              setResponse(res.data);
            })
            .catch((err) => {
              console.error('API Error:', err);
              setError(err);
            })
            .finally(() => {
              setLoading(false);
            });
        };
        fetchData();
      }, [url]);

    return {response, error, loading}
};

export default UseAxios;