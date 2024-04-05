import { createContext} from "react"
import FirstWay from "./FirstWay";
export const data1= createContext();
export const data2= createContext();
export const data3= createContext();
const Root = () => {
   const name="Vargas"
   const email="obed@gmail.com"
   const password="passcode"
  return (
    <>
    <data1.Provider value={name}>
      <data2.Provider value={email}>
         <data3.Provider value={password}>
            <FirstWay />
         </data3.Provider>
      </data2.Provider>
      </data1.Provider>  
    </>
  )
}

export default Root