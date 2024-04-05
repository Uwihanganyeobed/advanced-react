import React, { useState } from 'react'
import Son from './Son';
import Daughter from './Daughter';

const Parent = () => {
   const [state, setState]=useState(0);
  return (
    <div>
      <Son count={state} onClickhandler={()=>setState(state+1)} />
      <Daughter count={state} onClickhandler={()=>setState(state+1)}/>
    </div>
  )
}

export default Parent