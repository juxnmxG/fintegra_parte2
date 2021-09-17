import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FormCalc from "./components/FormCalc";
import ListPersons from "./components/ListPersons/ListPersons";
import ModalCalc from "./components/ModalCalc";

function App() {
  const [data, setData] = useState([]);
  const [modalState1, setModalState1] = useState(false);
  const [modalState2, setModalState2] = useState(false);

  const apiGet = async (e, form) => {
    e.preventDefault();

    const { name } = form;

    if (name === "") {
      alert("escribe un nombre");
    } else {
      if (name.indexOf(" ") !== -1) {
        const names = name.split(" ");
        let namesUrl = names[0];

        names.forEach((element, i) => {
          if (i > 0) {
            namesUrl += `&name[]=${element}`;
          }
        });

        console.log(namesUrl);

        const response = await fetch(`https://api.agify.io?name=${namesUrl}`, {
          method: "GET",
        });

        const res = await response.json();
        setData(res);
        setModalState2(true);

      } else {
        const response = await fetch(`https://api.agify.io?name=${name}`, {
          method: "GET",
        });
        const res = await response.json();
        setData(res);
        setModalState1(true);
      }
    }
  };

  console.log(data);

  return (
    <Router>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link to="/" className="nav-link active">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/app" className="nav-link">
            Lista de Personas
          </Link>
        </li>
      </ul>
      <Switch>
        <Route path="/" exact>
          <FormCalc calc={apiGet}></FormCalc>
          <ModalCalc modalState={modalState1} changeModal={setModalState1}>
            <h3>Nombre</h3>
            <p>{data.name}</p>
            <h3>Predición de edad</h3>
            <p>{data.age}</p>
            <h3>Count</h3>
            <p>{data.count}</p>
          </ModalCalc>
          <ModalCalc modalState={modalState2} changeModal={setModalState2}>
            <Link to="/app" className="btn btn-primary">Visualizar Lista</Link>
          </ModalCalc>
        </Route>
        <Route path="/app">
          <ListPersons persons={data}></ListPersons>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
