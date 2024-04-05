
const Daughter = ({count, onClickhandler}) => {
   const handleClick=()=>{
      onClickhandler();
   }
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Click Daughter and Update All</button>
    </div>
  )
}

export default Daughter