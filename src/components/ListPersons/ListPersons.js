import React from "react";

function ListPersons(props) {
  const { persons } = props;

  return (
    <div>
      {persons.map((element) => (
        <div className="card">
          <h3>Nombre</h3>
          <p>{element.name}</p>
          <h3>Años predecidos</h3>
          <p>{element.age}</p>
          <h3>Count</h3>
          <p>{element.count}</p>
        </div>
      ))}
    </div>
  );
}

export default ListPersons;
