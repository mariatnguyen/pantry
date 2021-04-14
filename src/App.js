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
      pairings: []
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
    //fetch(`${foodParam}.json`, {method: 'GET'})
    fetch(`https://api.spoonacular.com/food/wine/pairing?food=${foodParam}&apiKey=${apiKey}`)
      .then((url) => url.json())
      .then(results => {
        this.setState({
          pairings: results
        });
        document.getElementById("pairings").classList.remove("hide");
        document.getElementById("pairings").classList.add("show");
      })
  }

  componentDidMount() {
  }

//https://api.spoonacular.com/food/wine/pairing?food=apple&apiKey=b329f47d9908439e9984c31a93c553b0
//https://api.spoonacular.com/recipes/complexSearch?titleMatch=burger&sort=random&number=1&apiKey=b329f47d9908439e9984c31a93c553b0
//https://api.spoonacular.com/recipes/642540/analyzedInstructions?apiKey=b329f47d9908439e9984c31a93c553b0

  render() {
    return (
        <div className="App">
          <MainSearch setFood={this.setFood.bind(this)} />
          {this.state.pairings ? <Pairings pairings={this.state.pairings} foodSelection={this.state.foodSelection} /> : null}
      </div>
    );
  }
}

export default App;