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
        foodParam: event.type === "click" ? event.target.id : event.toLowerCase(),
        foodSelection: event.type === "click" ? event.target.innerHTML : event
      });
      event.type === "click" ? this.getPairings(event.target.id) : this.getPairings(event.toLowerCase());
  }

  getPairings(foodParam) {
    const apiKey = process.env.REACT_APP_API_KEY;
    fetch(`https://api.spoonacular.com/food/wine/pairing?food=${foodParam}&apiKey=${apiKey}`)
      .then((url) => url.json())
      .then(results => {
        this.setState({
          pairings: results
        });
      })
    .catch(error => console.log(error));
    fetch(`https://api.spoonacular.com/recipes/complexSearch?titleMatch=${foodParam}&sort=random&number=1&apiKey=${apiKey}`, {method: 'GET'})
      .then((url) => url.json())
      .then(results => {
        if (results.results.length !== 0) {
          this.setState({
            id: results.results[0].id,
            dish: results.results[0].title
          });
          return fetch(`https://api.spoonacular.com/recipes/${results.results[0].id}/analyzedInstructions?apiKey=${apiKey}`)
        } else {
          return null
        }
      })
      .then((url) => url.json())
      .then(results => {
        this.setState({
          dishRecipe: results
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <MainSearch setFood={this.setFood} foodParam={this.state.foodParam}/>
        {this.state.pairings && this.state.dishRecipe ? <Pairings setFood={this.setFood} pairings={this.state.pairings} dish={this.state.dish} id={this.state.id} dishRecipe={this.state.dishRecipe} foodSelection={this.state.foodSelection} /> : null}
      </div>
    );
  }
}

export default App;