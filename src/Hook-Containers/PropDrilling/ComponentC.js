import { con1, con2, con3 } from "./AppDriller";
const ComponentC = () => {
  return (
    <con1.Consumer>
      {(name) => {
        return (
          <con2.Consumer>
            {(email) => {
              return (
                <con3.Consumer>
                  {(password) => {
                    return (
                      <div>
                        <h1>HERE is my description</h1>
                        <ul>
                        <li>Name is {name}</li>
                        <li>Email is {email}</li>
                        <li>Password is {password}</li>
                        </ul>
                      </div>
                    );
                  }}
                </con3.Consumer>
              );
            }}
          </con2.Consumer>
        );
      }}
    </con1.Consumer>
  );
};

export default ComponentC;
// import { Data, Data1,Data2 } from "./AppDriller";

// const ComponentC = () => {
//   return (
//     <>
//       {/* 4. Consuimg/Accessing Data */}
//       <Data.Consumer>
//         {(name) => {
//           // return <h1>My name is: {name}</h1>;
//           return (
//             <Data1.Consumer>
//               {(age) => {
//                 return (
//                   <Data2.Consumer>
//                     {(sex)=>{
//                       return(

//                         <h1>
//                           My name is: {name} and I'm {age} years old and i'm {sex}.
//                         </h1>
//                       )
//                     }}
//                </Data2.Consumer>
//                 );
//               }}
//             </Data1.Consumer>
//           );
//         }}
//       </Data.Consumer>
//     </>
//   );
// };

// export default ComponentC;

// const ComponentC = ({ model, title }) => {
//   return (
//   <div>
//     <ul>
//       <h1>{title}</h1>
//       {model.map((mod)=>(
//         <li key={Math.random()}>{mod}</li>
//       ))}
//     </ul>
//   </div>
//   )
// };

// export default ComponentC;
