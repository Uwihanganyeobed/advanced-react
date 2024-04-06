import React from "react";
import { FunMapper } from "./Components/ArrayMapping/FunMapper";
import PropsData from "./Components/ArrayMapping/PropsData";
import { ChildrenProps } from "./Components/ArrayMapping/ChildrenProps";
import { Validation } from "./Components/ConditionalRendering/Validation";
import { CartValidation } from "./Components/ConditionalRendering/CartValidation";
import { Event } from "./Components/Events/Event";
import { States } from "./Components/State/States";
import { ArrayStates } from "./Components/State/ArrayStates";
import { ObjectStates } from "./Components/State/ObjectStates";
import { Form } from "./Components/FormHandling/Form";
import Parent from "./Components/StateSharing/Parent";
import Effect from "./Hook-Containers/useEffect-Custom/Effect";
import AppDriller from "./Hook-Containers/PropDrilling/AppDriller";
import Root from "./Hook-Containers/useContext/Root";
import Reducer from "./Hook-Containers/Reducer-Ref/Reducer";
import Ref from "./Hook-Containers/Reducer-Ref/Ref";
import DataConsumer from "./Hook-Containers/useEffect-Custom/DataConsumer";
import Counter from "./Projects/Counter/Counter";
import Todo from "./Projects/Todo/Todo";

const App = () => {
  return (
    <div>
      {/* <FunMapper/>
      <PropsData/>
      <ChildrenProps/>
      <Validation/>
      <CartValidation/>
      <Event/>
      <States/>
      <ArrayStates/>
      <ObjectStates/>
      <Form/> 
      <Parent/>
      <Effect/>
      <AppDriller/>
      <Root/>
      <Reducer/> 
      <Ref/>
      <DataConsumer/> */}
      {/* <Counter/> */}
      <Todo/>
     
    </div>
  );
};

export default App;
