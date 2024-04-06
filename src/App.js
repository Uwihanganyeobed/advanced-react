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
import Meal from "./Projects/Meal API/Meal";
import Calculator from "./Projects/Calculator/Calculator";
import ToggleBackgroundColor from "./Projects/ToogleBg/ToggleBackgroundColor";
import HiddenSearchBar from "./Projects/Search_Icon/HiddenSearchBar";
import Testimonials from "./Projects/Testimonials/Testimonials";
import Accordion from "./Projects/Accordition/Accordion";
import FormValid from "./Projects/FormValidation/FormValid";
import Filter from "./Advanced Data Filtering Project/Filter";

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
      <DataConsumer/>
      <Counter/>
      <Todo/> 
     <Meal/>
     <Calculator/>
     <ToggleBackgroundColor/>
     <HiddenSearchBar/>
     <Testimonials/>
     <Accordion/>
    <FormValid/>
    <Filter/> */}
    <p>Created and Designed by <span><a href="https://github.com/Uwihanganyeobed" style={{color:'green'}}>Obed Uwihanganye</a> </span></p>
    </div>
  );
};

export default App;
