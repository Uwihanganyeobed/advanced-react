// I'M GONNA GIVE YOU A FEW EXAMPLE BUT THERE IS A LOT MORE TO IT,
// EXPLORE IT BY YOURSELF 🥂

// In this video I'm gonna give you the practice of functional component
// BUT you're totally free to work with class based components as well 🥂

// ------------------  Example 1 (IF) ------------------

// const ValidPassword = () => <h1>Valid Password</h1>;
// const InvalidPassword = () => <h1>Invalid Password</h1>;

// const Password = ({ isValid }) => {
//   if (isValid) {
//     return <ValidPassword />;
//   }
//   return <InvalidPassword />;
// };

// const App = () => {
//   return (
//     <section>
//       <Password isValid={true} />
//     </section>
//   );
// };


// ------------------ Example 3 (Ternary Operator) ------------------
// condition ? true : false

const ValidPassword=()=><h1>Valid Password</h1>
const InValidPassword=()=><h1>Invalid Password</h1>
const User=({isValid})=>
isValid ? <ValidPassword /> : <InValidPassword />

export const Validation = () => {
  return (
    <div>
      <User isValid={true}/>
    </div>
  )
}


