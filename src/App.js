import React from 'react'
import { FunMapper } from './Components/ArrayMapping/FunMapper'
import PropsData from './Components/ArrayMapping/PropsData'
import { ChildrenProps } from './Components/ArrayMapping/ChildrenProps'
import { Validation } from './Components/ConditionalRendering/Validation'
import { CartValidation } from './Components/ConditionalRendering/CartValidation'
import { Event } from './Components/Events/Event'
import { States } from './Components/State/States'
import { ArrayStates } from './Components/State/ArrayStates'
import { ObjectStates } from './Components/State/ObjectStates'
import { Form } from './Components/FormHandling/Form'

const App = () => {
  return (
    <div>
      <FunMapper/>
      <PropsData/>
      <ChildrenProps/>
      <Validation/>
      <CartValidation/>
      <Event/>
      <States/>
      <ArrayStates/>
      <ObjectStates/>
      <Form/>
    </div>
  )
}

export default App