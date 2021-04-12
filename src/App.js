import React, { PureComponent } from "react";
import MainSearch from "./MainSearch.js";
import Pairings from "./Pairings.js";
import './App.css';

class App extends PureComponent {
  apiKey = "b329f47d9908439e9984c31a93c553b0";

  constructor(props) {
    super(props);
    this.state = {
      wineParam: '',
      wineSelection: '',
      pairings: [{ "text": "Malbec is a dry red wine which is bold and full bodied. It goes especially well with stew, steak, chili, jjigae, and burger.", "pairings": ["stew", "steak", "chili", "jjigae", "burger"] }
      ]
    };
    this.setWine = this.setWine.bind(this);
  }

  setWine(event) {
    this.setState(
      {
        wineParam: event.target.id,
        wineSelection: event.target.innerHTML
      });
  }

  /*
  componentDidUpdate(prevState) {
    if (this.state.wineParam !== prevState.wineParam) {
        this.getPairings(this.state.wineParam);
    }
  }

  getPairings(wineParam) {
    fetch(`${wineParam}.json`)
      //fetch(`https://api.spoonacular.com/food/wine/dishes?wine=albarino&apiKey=b329f47d9908439e9984c31a93c553b0`)
      //fetch(`https://api.spoonacular.com/food/wine/dishes?wine=${this.state.wineParam}&apiKey=${apiKey}`)
      .then((url) => url.json())
      .then(results => {
        console.log(results);
        this.setState({
          pairings: results
        });
      })
  }
*/

  render() {
    return (
      <div className="App">
        <MainSearch setWine={this.setWine.bind(this)} />
        {this.state.wineParam.length !== 0 && <Pairings pairings={this.state.pairings} wineSelection={this.state.wineSelection} />}
      </div>
    );
  }
}

export default App;