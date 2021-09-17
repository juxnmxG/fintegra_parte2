import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FormCalc from "./components/FormCalc";

function App() {
  const [data, setData] = useState([]);

  const apiPost = async (name) => {
    const url = `https://api.agify.io?name=${name}`;

    const response = await fetch(url, {
      method: "GET",
    });
    const res = await response.json();

    setData(res);

    console.log(data);
  };

  return (
      <Router>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link to="/" className="nav-link active">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/app" className="nav-link">App</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/" exact>
            <FormCalc calcular={apiPost}></FormCalc>
          </Route>
          <Route path="/app">saasdfasdfa</Route>
        </Switch>
      </Router>
    
  );
}

export default App;
