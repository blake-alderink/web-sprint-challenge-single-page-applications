import { toHaveFormValues } from "@testing-library/jest-dom/dist/matchers";
import React from "react";

const Form = (props) => {
  const { formValues, change, onSubmit } = props;
  return (
    <div>
      <form onSubmit={onSubmit} id="pizza-form">
        <label>
          Name
          <input
            name="name"
            type="text"
            id="name-input"
            value={formValues.name}
            onChange={change}
          />
        </label>
        <label>
          Pizza Size
          <select
            name="size"
            type="select"
            id="size-dropdown"
            value={formValues.size}
            onChange={change}
          >
            <option value="">Please Select One</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
        <label>
          Pepperoni
          <input
            type="checkbox"
            name="pepperoni"
            checked={formValues.pepperoni}
            onChange={change}
          />
        </label>
        <label>
          Sausage
          <input
            type="checkbox"
            name="sausage"
            checked={formValues.sausage}
            onChange={change}
          />
        </label>
        <label>
          Veggies
          <input
            type="checkbox"
            name="veggies"
            checked={formValues.veggies}
            onChange={change}
          />
        </label>
        <label>
          Cheese
          <input
            type="checkbox"
            name="cheese"
            checked={formValues.cheese}
            onChange={change}
          />
        </label>
        <label>
          Special Instructions
          <input
            name="special"
            type="text"
            id="special-text"
            value={formValues.special}
            onChange={change}
          />
        </label>
        <button id="order-button">Add order</button>
      </form>
    </div>
  );
};

export default Form;
