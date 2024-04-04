import React from "react";

export const ObjectMap = ({objectMapProp}) => {
  const staffInfo = [
    {
      staffName: "UWIHANGANYE Obed",
      staffEmail: "uwihanganyeobed@gmail.com",
      staffAge: 23,
      staffLocation: "KIGALI",
      staffSalary: 2000.0,
    },
    {
      staffName: "MUNEZERO Micheal",
      staffEmail: "micheal@gmail.com",
      staffAge: 33,
      staffLocation: "BIRYOGO",
      staffSalary: 5000.0,
    },
    {
      staffName: "MUGENI Rose",
      staffEmail: "rose111@gmail.com",
      staffAge: 19,
      staffLocation: "KIBUYE",
      staffSalary: 12000.0,
    },
  ];

  return (
    <div style={{background: 'green'}}>
     <marquee behavior="good" direction="right">
           {objectMapProp}
          </marquee>
      <table>
        <thead>
          <tr>
            <th>STAFF NAME</th>
            <th>STAFF EMAIL</th>
            <th>STAFF AGE</th>
            <th>STAFF LOCATION</th>
            <th>STAFF SALARY</th>
          </tr>
        </thead>
        <tbody >
          {staffInfo.map((staff, index) => (
            <tr key={index}>
              <td>{staff.staffName}</td>
              <td>{staff.staffEmail}</td>
              <td>{staff.staffAge}</td>
              <td>{staff.staffLocation}</td>
              <td>{staff.staffSalary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
