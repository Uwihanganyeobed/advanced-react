import DataProvider from "./DataProvider";

const DataConsumer = () => {
  const [data] = DataProvider("https://jsonplaceholder.typicode.com/todos");
  return (
    <>
     {data &&
        data.map((item) => {
          return (
            <ul key={item.id}>
              <li>{item.title}</li>
            </ul>
          );
        })}
    </>
  );
};
export default DataConsumer;
