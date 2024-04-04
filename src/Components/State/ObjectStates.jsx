import { useState } from "react"
export const ObjectStates = () => {
   const [movies, setMovies]=useState([
      {
         name: 'Expandables',
         author: 'Rambo',
         ratings: 5,
         old_price: 500,
         new_price: 330
      },
      {
         name: 'Seal Team 6',
         author: 'Bob Lee Swagger',
         ratings: 7,
         old_price: 450,
         new_price: 230
      },
      {
         name: 'Transporter',
         author: 'Stallone',
         ratings: 6.3,
         old_price: 700,
         new_price: 430
      }
   ])
   const handleMovies=()=>{
         const updatedMovies = movies.map(movie => ({
      ...movie,
      new_price: Math.floor(movie.old_price * 0.50) // Update the price for each movie
    }));
    setMovies(updatedMovies);
  };
  return (
   <div style={{margin:'2rem'}}>
      <h1>This year Movies top ratings</h1>
        {movies.map((movie, index) => (
           <div key={index}>
             <h3>Movie Name: {movie.name}</h3>
             <p>Movie Author: {movie.author}</p>
             <p>Movie ratings: {movie.ratings}</p>
             <p>Movie Old Price: {movie.old_price}</p>
             <p>Movie New Price: {movie.new_price}</p>
           </div>
         ))}
         <button onClick={handleMovies}>Change Prices</button>
       </div>
  )
}

// import React, { useState } from "react";

// export const ObjectStates = () => {
//   const [movies, setMovies] = useState([
//     {
//       title: "Equalizer 3",
//       ratings: 7,
//       price: 300
//     },
//     {
//       title: "Transporter 2",
//       ratings: 4,
//       price: 120
//     },
//     {
//       title: "Transformers 3",
//       ratings: 6,
//       price: 410
//     }
//   ]);

//   const handleClick = () => {
//     const updatedMovies = movies.map(movie => ({
//       ...movie,
//       price: Math.floor(movie.price * 0.15) // Update the price for each movie
//     }));
//     setMovies(updatedMovies);
//   };

//   return (
//     <div style={{margin:'2rem'}}>
//       {movies.map((movie, index) => (
//         <div key={index}>
//           <h1>{movie.title}</h1>
//           <p>{movie.ratings}</p>
//           <p style={{color:'green'}}>${movie.price}</p>
//         </div>
//       ))}
//       <button onClick={handleClick}>Change Prices</button>
//     </div>
//   );
// };



// export const ObjectStates = () => {
//   const [movies, setMovies] = useState([
//     { id: 1, title: "Spiderman", ratings: 3 },
//     { id: 2, title: "Superman", ratings: 6 },
//   ]);

//   const handleClick = () => {
//     setMovies(
//       movies.map((m) => (m.id === 1 ? { ...movies, title: "John Wick 4" } : m))
//     );
//   };

//   return (
//     <div>
//       {movies.map((movie) => (
//         <li key={Math.random()}>{movie.title}</li>
//       ))}
//       <button onClick={handleClick}>Change Name</button>
//     </div>
//   );
// };

