import { useContext } from "react"
import { data1,data2,data3 } from "./Root"
const LeafNode = () => {
  const name=useContext(data1);
  const email=useContext(data2);
  const password=useContext(data3);
  return (
    <div>
      <h2><marquee>Here is List of Data</marquee></h2>
      <ul>
        <li>Data Name: {name}</li>
        <li>Email Name: {email}</li>
        <li>Password Name: {password}</li>
      </ul>
    </div>
  )
}

export default LeafNode;