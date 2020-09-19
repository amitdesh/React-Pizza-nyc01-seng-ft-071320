import React from "react";

const Pizza = (props) => {
  return (
    <tr>
      <td>{props.pizza.topping}</td>
      <td>{props.pizza.size}</td>
      <td>{props.pizza.vegetarian ? <h6>Yes</h6> : <h6>No</h6>}</td>
      <td>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            props.editHandler(props.pizza);
          }}
        >
          Edit Pizza
        </button>
      </td>
    </tr>
  );
};

export default Pizza;
