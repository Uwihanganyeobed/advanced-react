// Composition: Composition is 
// the act of combining multiple smaller 
// components to create more complex ones.
//  In React, this is typically achieved 
//  by nesting components within each other or
//   passing components as props to other components.

// In this example, the Button component
//  is composed within the App component. The App component
//   renders the Button component and passes a
//  prop onClick to handle button clicks.
import React from 'react';

// Child component
const Button = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

// Parent component using composition
const Composition = () => {
  const handleClick = () => {
    document.writeln('Button clicked!');
  };

  return (
    <div>
      <h1>Composition Example</h1>
      <Button onClick={handleClick}>Click me!</Button>
    </div>
  );
};

export default Composition;
