import { useEffect, useState } from 'react';

export const useFetch = (apiPath, queryTerm = "") => {
  const [data, setData] = useState([]);
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=aa89457cef454fcc7e674690dae34838&query=${queryTerm}`;
  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
    }
    fetchMovies();
  }, [url]);
  return (
    { data }
  );
};