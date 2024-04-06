// Inheritance: Inheritance in React is less common
//  compared to composition, but it involves creating a
//   new component that extends the functionality of 
//   another component. This can be achieved using class inheritance.

// In this example, the ChildComponent inherits from the
//  BaseComponent. The ChildComponent renders content from
//   both itself and its parent (BaseComponent). This is 
//   achieved using the super keyword to call methods 
//   from the parent class.
import React, { Component } from 'react';

// Base component with shared functionality
class BaseComponent extends Component {
  render() {
    return <h2>Base Component</h2>;
  }
}

// Child component inheriting from BaseComponent
class ChildComponent extends BaseComponent {
  render() {
    return (
      <div>
        {super.render()} {/* Calls render method of BaseComponent */}
        <h3>Child Component</h3>
      </div>
    );
  }
}

// Parent component rendering ChildComponent
class Inheritance extends Component {
  render() {
    return (
      <div>
        <h1>Inheritance Example</h1>
        <ChildComponent />
      </div>
    );
  }
}

export default Inheritance;
