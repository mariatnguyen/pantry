import React, { PureComponent } from "react";
import SearchBar from "./SearchBar.js";
import "./Pairings.css";

export default class Pairings extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { fade: false }
  }

  listSteps = (item, i) => {
    return item.steps.map(
      (individualStep, j) => {
        let allSteps = [];
        if (individualStep.length !== 0) {
          allSteps.push(individualStep.step);
        }
        return <li key={"ingredient" + j}>{allSteps.join("")}</li>;
      }
    )
  }

  listIngredients = (item, i) => {
    return item.steps.map(
      (individualStep, j) => {
        return individualStep.ingredients.map(
          (ingredients, k) => {
              return ingredients.length !== 0 ? <li key={"ingredient" + k}>{ingredients.name}</li> : null
          }
        )
      }
    )
  }

  componentDidUpdate(prevProps) {
    if (this.props.dish !== prevProps.dish) {
      this.setState({ fade: true });
    }
  }

  render() {
    return (
      <div id="pairings" className={"pairings " + this.props.pairings.length !== undefined && this.props.pairings.length !== 0 ? "show" : "hide"}>
        <div className="pairings__header">
          <div className="pairings__header--max-width">
            <div className="pairings__logo">
              <a href="/pantry/"><img src="./images/pantry.svg"
                alt="Pantry"
                width="100"
                height="30" /></a>
            </div>
            <div className="pairings__searchbar">
              <SearchBar setFood={this.props.setFood} foodParam={this.props.foodParam}/>
            </div>
          </div>
        </div>
        <div className={this.state.fade ? 'pairings-description pairings--fade' : 'pairings-description'} onAnimationEnd={() => this.setState({ fade: false })}>
          <div className="pairings-description--max-width">
            <h2 className="pairing-description__header">{this.props.foodSelection}</h2>
            <div className="pairing-description__text" key={this.props.foodSelection + 'pairings-text'}  >
              {this.props.pairings.pairingText ? this.props.pairings.pairingText : <p>No wine pairings found for <span className="pairing-description__food-selection">{this.props.foodSelection}</span>.</p>}
              {this.props.pairings.pairedWines !== undefined && this.props.pairings.pairedWines.length !== 0 ? <p className="pairing-description__wine-suggestions"><b>Suggestions: </b>{this.props.pairings.pairedWines.join(", ")}</p> : null}
            </div>
            {this.props.pairings.status !== "failure" && <img alt={this.props.dish} className="pairing__dish-image" src={`https://spoonacular.com/recipeImages/${this.props.id}-480x360.jpg`} />}
          </div>
        </div>
        {this.props.pairings.status !== "failure" && <div className={this.state.fade ? 'recipe pairings--fade' : 'recipe'} >
          <div className="recipe--max-width">
            <h2 className="recipe__header">{this.props.dish && "Recipe"}</h2>
            <h3 className="recipe__dish">{this.props.dish}</h3>
            <div className="recipe__content">
              <div className="recipe__ingredients">
                <h4 className="recipe__ingredients-header">
                  {this.props.dish && "Ingredients"}
                </h4>
                <ul>
                  {this.props.dishRecipe.map(this.listIngredients)}
                </ul>
              </div>
              <div className="recipe__steps">
                <h4 className="recipe__steps-header">
                  {this.props.dish && "Steps"}
                </h4>
                <ol>
                  {this.props.dishRecipe.map(this.listSteps)}
                </ol>
              </div>
            </div>
          </div>
        </div>}
        <a className="pairings__footer" href="https://github.com/mariatnguyen" target="_blank" rel="noreferrer">mariatnguyen @ Github</a>
      </div>
    );
  }
}