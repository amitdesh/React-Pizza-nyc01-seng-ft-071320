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
        // console.log(data);
        this.setState(() => ({
          pizzas: data,
        }));
      });
  }

  // componentDidUpdate(pizza) {
  editHandler = (pizza) => {
    console.log("this is the pizza I clicked on", pizza);
    this.setState(() => ({
      editPizza: pizza,
    }));
  };

  render() {
    console.log("Edit this pizza", this.state.editPizza);
    return (
      <Fragment>
        <Header />
        <PizzaForm editPizza={this.state.editPizza} />
        <PizzaList pizzas={this.state.pizzas} editHandler={this.editHandler} />
      </Fragment>
    );
  }
}

export default App;
