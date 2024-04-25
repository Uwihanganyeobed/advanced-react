import { createContext, useState } from "react";
import {dataApi} from "../../Advanced Data Filtering Project/db/data";
import FirstWay from "./FirstWay";
// {
//   img: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
//   title: "Nike Air Monarch IV",
//   star: <AiFillStar className="rating-star" />,
//   reviews: "(123 reviews)",
//   prevPrice: "$140,00",
//   newPrice: "200",
//   company: "Nike",
//   color: "white",
//   category: "sneakers",
//   date: "2021-04-06",
// }

export const data = createContext();
const Root = () => {
  const [dat, setDat] = useState({});
  return (
    <>
      <data.Provider value={[dat, setDat]}>
        <FirstWay />
      </data.Provider>
    </>
  );
};

export default Root;
