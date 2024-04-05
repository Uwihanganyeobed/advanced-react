// useRef is use to manage any kind of DOM manipulations.
import React from 'react'
import { useRef } from 'react';

const Ref = () => {
   const input=useRef(null);
   const FocusInput=()=>{
      input.current.focus();
      input.current.value="Oops!! you find Me";
   }
  return (
    <div>
      <input type="text"ref={input} />
      <button onClick={()=>FocusInput()}>Check Focus</button>
    </div>
  )
}

export default Ref;
// import { useRef } from "react";

// function Ref() {
//   const inputElement = useRef(null);

//   const focusInput = () => {
//     inputElement.current.focus();
//     inputElement.current.value = "HuXn";
//   };

//   return (
//     <>
//       <input type="text" ref={inputElement} />
//       <button onClick={() => focusInput()}>Focus & write HuXn</button>
//     </>
//   );
// }

// export default Ref;
