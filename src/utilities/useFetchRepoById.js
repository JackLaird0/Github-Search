import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const intialState = {
  repo: null,
  error: null,
};

const useFetchRepoById = (enabled) => {
  const [response, setResponse] = useState(intialState);
  const { id } = useParams();

  useEffect(() => {
    if (enabled && id) {
      fetch(`https://api.github.com/repositories/${id}`)
        .then((res) => res.json())
        .then((repo) => {
          setResponse((prev) => ({ ...prev, repo }));
        })
        .catch((error) => {
          setResponse((prev) => ({ ...prev, error }));
        });
    }
  }, [enabled]);

  return response;
};

export { useFetchRepoById };
