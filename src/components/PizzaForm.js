import React from "react";

class PizzaForm extends React.Component {
  constructor(props) {
    super();
    this.state = {
      topping: props.editPizza.topping,
    };
  }

  // componentDidMount(state) {
  //   state = {
  //     topping: `${this.props.editPizza.topping}`,
  //     size: "",
  //     vegetarian: "",
  //   };
  // }

  // static getDerivedStateFromProps(props, state) {
  //   // console.log("Topping", state.topping, props.editPizza);
  //   if (state.topping !== props.editPizza.topping) {
  //     return {
  //       topping: props.editPizza.topping,
  //       size: props.editPizza.size,
  //       vegetarian: props.editPizza.vegetarian,
  //     };
  //   }
  // }

  // componentDidMount() {
  //   this.state.topping = this.props.editPizza.topping;
  // }

  changeHandler = (e) => {
    console.log(e.target);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    console.log(this.state.topping);
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
          <select value={null} className="form-control">
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
              value="Vegetarian"
              checked={null}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              value="Not Vegetarian"
              checked={null}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button
            type="submit"
            className="btn btn-success"
            onClick={console.log}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default PizzaForm;
