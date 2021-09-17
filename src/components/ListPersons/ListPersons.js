import React from "react";
import "./ListPersons.css"
function ListPersons(props) {
  const { persons } = props;

  return (
    <div className="list">
      {persons.map((element) => (
        <div className="card" key={element.count}>
          <h3>Nombre</h3>
          <p>{element.name}</p>
          <h3>Predición de edad</h3>
          <p>{element.age}</p>
          <h3>Count</h3>
          <p>{element.count}</p>
        </div>
      ))}
    </div>
  );
}

export default ListPersons;
