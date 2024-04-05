import { useEffect, useState } from "react";

const DataProvider = (url) => {
  //url as a prop
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);
  return [data];
};

export default DataProvider;
