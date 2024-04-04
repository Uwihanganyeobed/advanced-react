// 1. Children lets you manipulate and transform the JSX you received as the children prop.
// 2. "Children" name is a special name for the nested JSX in a component.
import img from '../assets/wallpaperflare.com_wallpaper (2).jpg'
export const ChildrenProps = () => {
   return (
     <User
       img={img}
       name="HuXn WebDev"
       age={10}
       isMarried={false}
       hobbies={["Coding", "Reading", "Sleeping"]}
     >
       <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam iste
         molestias numquam, ratione adipisci atque quia et. Voluptas, soluta?
         Quibusdam accusantium quis saepe. Aliquam facilis quia obcaecati odio
         quo quos.
       </p>
       <ol>
         <li>DATA1</li>
         <li>DATA2</li>
       </ol>
     </User>
   );
 };
 
 const User = (props) => {
   const { img, name, age, isMarried, hobbies, children } = props;
 
   return (
     <section>
       <img src={img} alt={name} width={200} />
       <h1>Name: {name}</h1>
       <h2>Age: {age}</h2>
       <h3>Is married: {isMarried}</h3>
       <h4>Hobbies: {hobbies} </h4>
       <div style={{color: 'green'}}>{children}</div>{/*children will bring all unproped data on JSX*/}
     </section>
   );
 };
 
 