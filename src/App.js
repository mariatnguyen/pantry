import React, { PureComponent } from "react";
import MainSearch from "./MainSearch.js";
import Pairings from "./Pairings.js";
import './App.css';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      foodParam: '',
      foodSelection: '',
      pairings: [],
      dish: '',
      id: '',
      dishRecipe: []
    };
    this.setFood = this.setFood.bind(this);
  }

  setFood(event) {
    this.setState(
      {
        foodParam: event.target.id,
        foodSelection: event.target.innerHTML
      });
    this.getPairings(event.target.id);
  }

  getPairings(foodParam) {
    let apiKey = "b329f47d9908439e9984c31a93c553b0";
    //fetch(`cheese.json`, { method: 'GET' })
    fetch(`https://api.spoonacular.com/food/wine/pairing?food=${foodParam}&apiKey=${apiKey}`)
      .then((url) => url.json())
      .then(results => {
        this.setState({
          pairings: results
        });
      })
    //fetch(`burger.json`, { method: 'GET' })
    fetch(`https://api.spoonacular.com/recipes/complexSearch?titleMatch=${foodParam}&sort=random&number=1&apiKey=${apiKey}`, {method: 'GET'})
      .then((url) => url.json())
      .then(results => {
        this.setState({
          id: results.results[0].id,
          dish: results.results[0].title
        });
      //return fetch(`${results.results[0].id}.json`)
      return fetch(`https://api.spoonacular.com/recipes/${results.results[0].id}/analyzedInstructions?apiKey=b329f47d9908439e9984c31a93c553b0`)
      })
      .then((url) => url.json())
      .then(results => {
        this.setState({
          dishRecipe: results
        });
      })
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="App">
        <MainSearch setFood={this.setFood.bind(this)} />
        {this.state.pairings && this.state.dishRecipe ? <Pairings pairings={this.state.pairings} dish={this.state.dish} id={this.state.id} dishRecipe={this.state.dishRecipe} foodSelection={this.state.foodSelection} /> : null}
      </div>
    );
  }
}

export default App;