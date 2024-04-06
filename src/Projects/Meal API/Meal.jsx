import axios from "axios";
import { useState, useEffect } from "react";
import "./style.css";

function Meal() {
  // Define state for storing meal items
  const [items, setitems] = useState([]);

  // Fetch meal items from the API when component mounts
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        setitems(res.data.meals); // Update state with fetched meal items
      })
      .catch((err) => {
        console.log(err); // Log any errors that occur during the API request
      });
  }, []); // Empty dependency array ensures this effect runs only once when component mounts

  // Map through fetched meal items to create list of components
  const itemslist = items.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <div>
            <section className="card">
        <img src={strMealThumb} alt="" />
        <section className="content">
          <p>{strMeal}</p>
          <p>#{idMeal}</p>
        </section>
      </section>
      <p>Created and Designed by <span><a href="https://github.com/Uwihanganyeobed" style={{color:'green'}}>Obed Uwihanganye</a> </span></p>
      </div>
  
    );
  });

  // Render list of meal items
  return <div className="items-container">{itemslist}</div>;
}

export default Meal;
