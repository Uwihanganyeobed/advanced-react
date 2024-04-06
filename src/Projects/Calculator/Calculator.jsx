import { useState } from "react";
import "./index.css";

function Calculator() {
  // Define state for input value
  const [inputvalue, setinputvalue] = useState("");

  // Function to update input value when a button is clicked
  function display(value) {
    setinputvalue(inputvalue + value);
  }

  // Function to evaluate the expression and display result
  function calculate() {
    var answers = eval(inputvalue);
    setinputvalue(answers);
  }

  // Function to clear the input value
  function clear() {
    setinputvalue("");
  }

  return (
    // Calculator form
    <div>
    <form className="calculator" name="calc">
      {/* Input field for displaying the value */}

      <input type="text" className="value" value={inputvalue} />

      {/* Clear button */}
      <span className="num clear" onClick={() => clear()}>
        c
      </span>

      {/* Operator buttons */}
      <span onClick={() => display("/")}>/</span>
      <span onClick={() => display("*")}>*</span>
      <span onClick={() => display("-")}>-</span>
      <span className="plus" onClick={() => display("+")}>
        +
      </span>

      {/* Number buttons */}
      <span onClick={() => display("7")}>7</span>
      <span onClick={() => display("8")}>8</span>
      <span onClick={() => display("9")}>9</span>
      <span onClick={() => display("4")}>4</span>
      <span onClick={() => display("5")}>5</span>
      <span onClick={() => display("6")}>6</span>
      <span onClick={() => display("1")}>1</span>
      <span onClick={() => display("2")}>2</span>
      <span onClick={() => display("3")}>3</span>
      <span onClick={() => display("0")}>0</span>
      <span onClick={() => display("00")}>00</span>

      {/* Decimal point button */}
      <span onClick={() => display(".")}>.</span>

      {/* Equal button */}
      <span className="num equal" onClick={() => calculate()}>
        =
      </span>
    </form>
    <p>Created and Designed by <span><a href="https://github.com/Uwihanganyeobed" style={{color:'green'}}>Obed Uwihanganye</a> </span></p>
    </div>

  );
}

export default Calculator;
