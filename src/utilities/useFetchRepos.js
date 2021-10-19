import { useState, useEffect } from "react";

const useFetchRepos = (url) => {
  const initialState = {
    repos: null,
    error: null,
    loading: false,
  };

  const [response, setResponse] = useState(initialState);

  useEffect(() => {
    if (url) {
      setResponse({ ...initialState, loading: true });

      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          const repos = data.items;
          setResponse((prev) => ({ ...prev, repos }));
        })
        .catch((error) => {
          setResponse((prev) => ({ ...prev, error }));
        })
        .finally(() => {
          setResponse((prev) => ({ ...prev, loading: false }));
        });
    }
  }, [url]);

  return response;
};

export { useFetchRepos };
