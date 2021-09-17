import React, { useState } from "react";
import "./FormCalc.css";

function FormCalc(props) {
  const { calc } = props;

  const [form, setForm] = useState({
    name: "",
    select: "",
  });

  const update = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="formC">
      <form onChange={update} onSubmit={(e) => calc(e, form)}>
        <div className="mt-auto">
          <h2>Calcula tu fecha</h2>
        </div>
        <div className="mt-3">
          <span>Nombre(s):</span>
        </div>
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Ingresa tu nombre"
        ></input>
        <div className="mt-3">
          <span>Locación:</span>
        </div>
        <select
          className="form-select"
          aria-label="Default select example"
          name="select"
        >
          <option value="0">Seleccionar</option>
          <option value="CO">Colombia</option>
          <option value="US">Estados Unidos</option>
          <option value="ES">Epaña</option>
        </select>
        <button type="submit" className="btn btn-primary mt-3">
          calcular
        </button>
      </form>
    </div>
  );
}

export default FormCalc;
