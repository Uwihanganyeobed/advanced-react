
const Son = ({count,onClickhandler}) => {
   const handleClick=()=>{
      onClickhandler();
   }
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Click Son and Update All</button>
    </div>
  )
}

export default Son