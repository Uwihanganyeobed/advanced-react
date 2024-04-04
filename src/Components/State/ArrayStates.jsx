import { useState } from "react";
export const ArrayStates = () => {
  const [staff, setStaff] = useState(["Vargas", "Obed", "Mayor", "Micheal"]);
  //adding users on our db
  const addStaff = () => setStaff([...staff, "Moses", "Arcene"]);
  //removing first and last staffs from db
  const removeStaff = () =>
    setStaff(staff.filter((item) => item !== "Vargas", "Arcene"));
  //update Obed and Micheal
  const updateStaff = () =>
    setStaff(
      staff.map((item) =>
        item === "Micheal"
          ? "Micheal Lenas"
          : item && item === "Mayor"
          ? "Mayor Vargas"
          : item
          && item==='Moses'
          ? "Moses Kaycedo"
          : item
      )
    );
  return (
    <div>
      <ol>
      {staff.map((item) => (
        <li key={Math.random}>{item}</li>
      ))}
      </ol>
  
      <button onClick={addStaff}>Add Staff</button>
      <button onClick={removeStaff}>Remove Staff</button>
      <button onClick={updateStaff}>Update Staff</button>
    </div>
  );
};
