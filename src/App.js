import "./styles.css";
import React from "react";
export default function App() {
  const employees = [
    { id: 4, name: "Dean", country: "Denmark" },
    { id: 3, name: "Carl", country: "Canada" },
    { id: 2, name: "Bob", country: "Belgium" },
    { id: 1, name: "Alice", country: "Austria" },
    { id: 5, name: "Ethan", country: "Egypt" }
  ];
  const [data, setData] = React.useState([]);
  // console.log('data',data);
  React.useEffect(() => {
    setData(employees);
  }, []);
  const ascendingOrder = () => {
    let ascendingItems = data.sort((a, b) => a.id - b.id);
    console.log("ascendingItems", ascendingItems);
    setData([...ascendingItems]);
  };
  const descendingOrder = () => {
    let descendingItems = data.sort((a, b) => {
      return b.id - a.id;
    });
    console.log("descendingItems", descendingItems);
    setData([...descendingItems]);
  };
  return (
    <div>
      <button onClick={() => ascendingOrder()}>ascendingOrder</button>
      <button onClick={() => descendingOrder()}>descendingOrder</button>
      {data.map((employee) => {
        return (
          <div key={employee.id}>
            <h2>id: {employee.id}</h2>
            <h2>name: {employee.name}</h2>
            <h2>country: {employee.country}</h2>

            <hr />
          </div>
        );
      })}
    </div>
  );
}
