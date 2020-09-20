import React from "react";

class PizzaForm extends React.Component {
  state = {
    topping: "",
    size: "",
    vegetarian: "",
    id: "",
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      topping: nextProps.editPizza.topping,
      size: nextProps.editPizza.size,
      vegetarian: nextProps.editPizza.vegetarian,
      id: nextProps.editPizza.id,
    });
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  localSubmitHandler = () => {
    this.props.submitHandler(this.state);
  };

  render() {
    return (
      <div className="form-row">
        <div className="col-5">
          <input
            type="text"
            className="form-control"
            placeholder="Pizza Topping"
            name="topping"
            value={this.state.topping}
            onChange={this.changeHandler}
          />
        </div>
        <div className="col">
          <select
            value={this.state.size}
            onChange={this.changeHandler}
            className="form-control"
            name="size"
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              value={true}
              name="vegetarian"
              checked={null}
              onChange={this.changeHandler}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value={false}
              checked={null}
              onChange={this.changeHandler}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button
            type="submit"
            className="btn btn-success"
            onClick={this.localSubmitHandler}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default PizzaForm;
