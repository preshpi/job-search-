import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (endpoints, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const axios = require("axios");
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e2a47c4064mshfed2c74bf88d683p13fdd7jsn0228d5997863",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    url: `https://jsearch.p.rapidapi.com/${endpoints}`,
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await axios.request(options);
      setData(res.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert("There is an error!");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
