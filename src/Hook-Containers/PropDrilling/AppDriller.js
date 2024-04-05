import { createContext } from "react"
import ComponentA from "./ComponentA";
export const con1=createContext();
export const con2=createContext();
export const con3=createContext();
const AppDriller = () => {
  const name="Vargas"
  const email="vg@gmail.com"
  const password="passcode"
  return (
    <>
      <con1.Provider value={name}>
        <con2.Provider value={email}>
          <con3.Provider value={password}>
            <ComponentA/>
          </con3.Provider>
        </con2.Provider>
      </con1.Provider>
    </>
  )
}

export default AppDriller

// // 1. Importing (createContext)
// import { createContext } from "react";
// import ComponentA from "./ComponentA";

// // 2. Creating instance of (createContext)
// export const Data = createContext();
// export const Data1 = createContext();
// export const Data2= createContext();

// const AppDriller = () => {
//   const name = "HuXn";
//   const age = 19;
//   const sex='Male';

//   return (
//     <>
//       {/* 3. Wrapping our components into Provider component */}
//       <Data.Provider value={name}>
//         <Data1.Provider value={age}>
//           <Data2.Provider value={sex}>
//           <ComponentA />
//           </Data2.Provider>
//         </Data1.Provider>
//       </Data.Provider>
//     </>
//   );
// };

// export default AppDriller;




// import ComponentA from "./ComponentA";
// //this is like tree data structure from parent(root node) sending props to leaf node
// const AppDriller = () => {
//   const title="LIST OF CAR MODELS";
//   const carModels=['BMW','NISSAN','MERCEDEZ','CHEVROLET','TESLA'];//we want to pass this component on last Component C
//   return <ComponentA model={carModels} title={title} />;
// };

// export default AppDriller;




// In summary, while prop drilling is a
//  simple and straightforward way to pass 
//  data between components in React,
//   it's important to consider its limitations,
//    especially in larger applications. In such cases,
//    using React's Context API, state management libraries, 
//    or optimizing component rendering can provide better solutions
//     for managing application state and avoiding excessive prop drilling.

// export const AppDriller=()=> {
//   const userData = { name: 'John Doe', email: 'john@example.com' };

//   return (
//     <div>
//       <UserProfile userData={userData} />
//     </div>
//   );


//  function UserProfile({ userData }) {
//   return (
//     <div>
//       <UserAvatar avatarUrl={userData.avatarUrl} />
//       <UserBio bio={userData.bio} />
//     </div>
//   );
// }

//  function UserAvatar({ avatarUrl }) {
//   return <img src={avatarUrl} alt="User Avatar" />;
// }

//  function UserBio({ bio }) {
//   return <p>{bio}</p>;
// }
// }





