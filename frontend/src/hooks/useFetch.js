import { useState, useEffect } from 'react';

const useFetch = (initialUrl, initialOptions) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState(initialUrl);
  const [options, setOptions] = useState(initialOptions);

  useEffect(() => {
    setIsLoading(true);
    setError(undefined);

    async const fetchData = () => {
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setData(json);
      } catch (e) {
        setError(e);
      }
      setIsLoading(false);
    }
    fetchData();
  }, [url, options]);

  return { data, error, isLoading, setUrl, setOptions };
};

export default useFetch;
