import { useState } from "react";
const Counter=()=>{
   const [state, setState]=useState(0);
   const increment=()=>setState(state+1);
   const decrement=()=>setState(state-1);
   const reset=()=>setState(0);
return(
   <div>
      <p>{state}</p>
      <button onClick={()=>increment()}>Increment</button>
      <button onClick={()=>decrement()}>Decrement</button>
      <button onClick={()=>reset()}>Reset</button>
   </div>
)
}
export const States = () => {
  return <Counter />;
};

