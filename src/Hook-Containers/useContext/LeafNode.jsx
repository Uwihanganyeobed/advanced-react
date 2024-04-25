import { useContext } from "react";
import { data } from "./Root";

const LeafNode = () => {
  const [dat, setDat] = useContext(data);

  const updateData = () => {
    // Assuming dataApi is an object
    const newData = { /* new data */ };
    setDat(newData);
  };

  return (
    <div>
      <h2><marquee>Here is List of Data</marquee></h2>
      <ul>
        <li>Data Name: {dat.name}</li>
        <button onClick={updateData}>Update Data</button>
      </ul>
    </div>
  );
};

export default LeafNode;
