import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((response) => {
        setIsLoading(false);
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => setValue(data))
      .catch((err) => setError(err));
  }, [url, options]);

  return [isLoading, value, error];
};

export default useFetch;
