import React from "react";
import image1 from "../assets/wallpaperflare.com_wallpaper (3).jpg";
import image2 from "../assets/wallpaperflare.com_wallpaper (2).jpg";
import image3 from "../assets/stefan-rodriguez-2AovfzYV3rc-unsplash.jpg";

const User = ({ img, name, driver, age, isMarried, hobbies }) => {
  return (
    <section style={{ border: "1px solid green", padding: "2rem" }}>
      <img src={img} alt={name} width={"200px"} />
      <h1>Name: {name}</h1>
      <h1>Driver: {driver}</h1>
      <h2>Age: {age}</h2>
      <h3>Is married: {isMarried}</h3>
      <h4>Hobbies: {hobbies.join(", ")}</h4>
    </section>
  );
};

const PropsData = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
        margin: "1rem",
      }}
    >
      <User
        img={image1}
        name="MERCEDEZ BENZ"
        driver="Vargas"
        age={18}
        isMarried={false}
        hobbies={["Coding", "Reading", "Sleeping"]}
      />
      <User
        img={image2}
        name="BarraBass"
        driver="KRSTNT"
        age={28}
        isMarried={true}
        hobbies={["Coding", "Texting", "Swimming"]}
      />
      <User
        img={image3}
        name="CHEVROLET"
        driver="Micheal"
        age={38}
        isMarried={true}
        hobbies={["Gaming", "Entertaining", "Chatting"]}
      />
      <User
        img={image1}
        name="MERCEDEZ BENZ"
        driver="Vargas"
        age={18}
        isMarried={false}
        hobbies={["Coding", "Reading", "Sleeping"]}
      />
      {/* Add more User components with different props as needed */}
    </div>
  );
};

export default PropsData;
