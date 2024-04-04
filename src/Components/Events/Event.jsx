// Example 1
const Button = () => {
  // const handleClick = () => console.log("You Clicked Me");
  const handleClick = () => document.writeln(Math.round(Math.random() * 10));
  return <button onClick={handleClick}>Click Me And Check</button>;
};

// Example 2
const Copy = () => {
  function copyHandler() {
    document.writeln("Stop Stealing My Content.");
  }

  return (
    <p onCopy={copyHandler}>
      Try to copy any data from here and see what's happens to you!!
    </p>
  );
};

// Example 3
const Move = () => {
  function moveHandler() {
    document.writeln("Mouse Move Event Fired");
  }

  return (
    <p onMouseOver={moveHandler}>
      Hover Over Me NOW and see What's Happens!!!!!!!!
    </p>
  );
};

export const Event = () => {
  return( 
   <div style={{display: 'flex', flexDirection: 'column',gap: '3rem', margin: '3rem'}}>
 <Button />
  <Copy/>
  <Move/>
   </div>
 
  );
};
