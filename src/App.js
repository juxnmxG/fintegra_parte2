import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FormCalc from "./components/FormCalc";

function App() {
  const [data, setData] = useState([]);

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
          if(i > 0){
            namesUrl += `&name[]=${element}`
          }
        });
        
        console.log(namesUrl)
        
        const response = await fetch(`https://api.agify.io?name=${namesUrl}`, {
          method: "GET",
        });

        const res = await response.json();
        setData(res);

      } else {
        const response = await fetch(`https://api.agify.io?name=${name}`, {
          method: "GET",
        });
        const res = await response.json();
        setData(res);
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
            App
          </Link>
        </li>
      </ul>
      <Switch>
        <Route path="/" exact>
          <FormCalc calc={apiGet}></FormCalc>
        </Route>
        <Route path="/app">saasdfasdfa</Route>
      </Switch>
    </Router>
  );
}

export default App;
