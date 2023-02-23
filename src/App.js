import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Home from "./Home";
import Form from "./Form";
import axios from "axios";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().min(2, "name must be at least 2 characters"),
  size: yup.string(),
  special: yup.string(),
  pepperoni: yup.boolean(),
  sausage: yup.boolean(),
  veggies: yup.boolean(),
  cheese: yup.boolean(),
});

const App = () => {
  const initialFormValues = {
    name: "",
    size: "",
    pepperoni: false,
    veggies: false,
    sausage: false,
    cheese: false,
    special: "",
  };
  const initialErrorValues = {
    name: "",
    size: "",
    toppings: "",
    special: "",
  };

  const [formValues, setFormValues] = useState(initialFormValues);
  const [orders, setOrders] = useState([]);
  const [formErrors, setFormErrors] = useState(initialErrorValues);

  const setFormErrorsFunc = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    axios.post("https://reqres.in/api/orders", formValues).then((res) => {
      setOrders([...orders, res.data]);
      console.log(formValues);
    });
  };

  const change = (event) => {
    const { name, value, type, checked } = event.target;
    const valueToUse = type === "checkbox" ? checked : value;
    setFormValues({ ...formValues, [name]: valueToUse });
    setFormErrorsFunc(name, valueToUse);
  };

  console.log(orders);

  return (
    <div>
      <h1>{formErrors.name}</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/form">Form</Link>
      </nav>
      {/* <h1>testtest</h1> */}
      <Switch>
        <Route path="/pizza">
          <Form formValues={formValues} change={change} onSubmit={onSubmit} />
        </Route>
        <Route path="/">
          <Home orders={orders} />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
