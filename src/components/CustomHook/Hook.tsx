import { useEffect, useState } from "react";

const useData = (url: string, page = 1, append = false) => {

  const [data, setData] = useState<any>({ results: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setLoading(true);
      setError("");

      try {

        //if page already included in url then use it
        //otherwise append ?page= or &opage=

        const finalUrl = url.includes("page=")
          ? url
          : `${url}${url.includes("?") ? "&" : "?"}page=${page}`;

        const res = await fetch(finalUrl);
        const json = await res.json();

        //merge new result with previous one 
        if (append) {
          setData((prev: any) => ({
            ...json,
            results: [...(prev?.results || []), ...(json?.results || [])],
          }));
        } else {
          setData(json);
        }
      } catch (err: any) {
        setError("Failed to fetch data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, page, append]);

  return { data, loading, error };
};

export default useData;
