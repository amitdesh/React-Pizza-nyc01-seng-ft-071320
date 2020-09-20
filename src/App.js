import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import PizzaForm from "./components/PizzaForm";
import PizzaList from "./containers/PizzaList";

class App extends Component {
  state = {
    pizzas: [],
    editPizza: [],
  };

  componentDidMount() {
    return fetch("http://localhost:3000/pizzas")
      .then((resp) => resp.json())
      .then((data) => {
        this.setState(() => ({
          pizzas: data,
        }));
      });
  }

  editHandler = (pizza) => {
    console.log("this is the pizza I clicked on", pizza);
    this.setState(() => ({
      editPizza: pizza,
    }));
  };

  submitHandler = (pizzaObj) => {
    // console.log(pizzaObj);
    this.patchRequest(pizzaObj);
    this.setState(() => ({
      topping: "",
    }));
  };

  patchRequest = (obj) => {
    // console.log(obj);
    let options = {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(obj),
    };
    return fetch("http://localhost:3000/pizzas/" + obj.id, options)
      .then((resp) => resp.json())
      .then((obj) => {
        console.log(obj);
        let newPizzaArray = [...this.state.pizzas];
        let foundObj = newPizzaArray.find(
          (el) => el.id === parseInt(obj.id, 10)
        );
        foundObj = obj;
        this.setState({ pizzas: newPizzaArray });
      });
  };

  render() {
    // console.log("Edit this pizza", this.state.editPizza);
    return (
      <Fragment>
        <Header />
        <PizzaForm
          editPizza={this.state.editPizza}
          submitHandler={this.submitHandler}
        />
        <PizzaList pizzas={this.state.pizzas} editHandler={this.editHandler} />
      </Fragment>
    );
  }
}

export default App;
