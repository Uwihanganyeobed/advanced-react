import React from "react";

export const ArrayMap = ({arrayMapProp}) => {
  const myCars = ["AUDI", "BUGGATI", "CHEVROLET", "MERCEDEZ", "TESLA"];
  return (
    <div style={{ background: "orangered" }}>
      <h2>
        <ul>
          <h2>
          <marquee behavior="good" direction="right">
           {arrayMapProp}
          </marquee>
          </h2>
        </ul>
      </h2>
      <div style={{display: 'flex',gap:'3rem'}}>
        {myCars.map((car) => (
          <ol key={Math.random()}>
            <li>{car}</li>
          </ol>
        ))}
      </div>
    </div>
  );
};
