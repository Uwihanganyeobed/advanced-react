// Importing useState hook from React library
import { useState } from "react";
import './index.css'
// Define a functional component named FormValid
function FormValid() {
  // Define state variables for username, email, password, and confirmPassword
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Define state variables for error messages related to each input field
  const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfrimPassword, setErrorConfirmPassword] = useState("");

  // Define state variables for color indication of input fields
  const [userColor, setUserColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  // Function to handle form validation
  function validate(e) {
    e.preventDefault();

    // Validation for username length
    if (username.length > 8) {
      setErrorUserName("");
      setUserColor("green");
    } else {
      setErrorUserName("Username must be 8 letters long.");
      setUserColor("red");
    }

    // Validation for email format
    if (email.includes("@gmail")) {
      setErrorEmail("");
      setEmailColor("green");
    } else {
      setEmailColor("red");
      setErrorEmail("Email should have @gmail");
    }

    // Validation for password length
    if (password.length > 8) {
      setErrorPassword("");
      setPasswordColor("green");
    } else {
      setErrorPassword("Password should be 8 letters long ");
      setPasswordColor("red");
    }

    // Validation for password match
    if (password !== "" && password === confirmPassword) {
      setErrorConfirmPassword("");
      setConfirmPasswordColor("green");
    } else {
      setErrorConfirmPassword("Passwords didn't match.");
      setConfirmPasswordColor("red");
    }
  }

  // Render the component
  return (
    <>
      <div className="card">
        <div className="card-image"></div>

        {/* Form element */}
        <form>
          {/* Input field for username */}
          <input
            type="text"
            placeholder="Name"
            style={{ borderColor: userColor  , color: 'black'}}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {/* Display error message for username */}
          <p className="error">{errorUserName}</p>

          {/* Input field for email */}
          <input
            type="text"
            placeholder="Email"
            style={{ borderColor: emailColor  , color: 'black'}}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* Display error message for email */}
          <p className="error">{errorEmail}</p>

          {/* Input field for password */}
          <input
            type="password"
            placeholder="Password"
            style={{ borderColor: passwordColor , color: 'black'}}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* Display error message for password */}
          <p className="error">{errorPassword}</p>

          {/* Input field for confirming password */}
          <input
            type="password"
            placeholder="Confirm Password"
            style={{ borderColor: confirmPasswordColor  , color: 'black'}}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {/* Display error message for confirming password */}
          <p className="error">{errorConfrimPassword}</p>

          {/* Submit button */}
          <button className="submit-btn" onClick={validate}>
            Submit
          </button>
        </form>
      </div>
    <p>Created and Designed by <span><a href="https://github.com/Uwihanganyeobed" style={{color:'green'}}>Obed Uwihanganye</a> </span></p>
    </>
  );
}

// Export the component as default
export default FormValid;
