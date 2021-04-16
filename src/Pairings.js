import React, { PureComponent } from "react";
import "./Pairings.css";

export default class Pairings extends PureComponent {  
  listSteps = (step, i) => {
    if (step.name.length !== 0)  { 
    return <li key={"step" + i}>{step.name}</li>}
  }

  listMoreSteps = (item, i) => {
    return item.steps.map(
      (individualStep,k) => {
        if (individualStep.length !== 0)  { 
        return <li key={"step" + k}>{individualStep.step}</li>
        }
      }
    )
  }

  render() {
    return (
      <div id="pairings" className={"pairings " + this.props.pairings.length !== undefined && this.props.pairings.length !== 0 ? "show" : "hide"}>
        <div className="pairings__header">
          <div className="pairings__header--max-width">
            <div className="pairings__logo">
              <img src="./images/pantry.svg"
                alt="Pantry"
                width="100"
                height="30" />
            </div>
          </div>
        </div>
        <div className="pairings-description">
          <div className="pairings-description--max-width">
            <h2 className="pairing-description__header">{this.props.foodSelection}</h2>
            <div className="pairing-description__text" key={this.props.foodSelection + 'pairings-text'}  >
              {this.props.pairings.pairingText ? this.props.pairings.pairingText : <p>No wine pairings found for <span className="pairing-description__food-selection">{this.props.foodSelection}</span>.</p>}
              {this.props.pairings.pairedWines !== undefined && this.props.pairings.pairedWines.length !== 0 ? <p className="pairing-description__wine-suggestions"><b>Suggestions: </b>{this.props.pairings.pairedWines.join(", ")}</p> : null}
            </div>
            <img className="pairing__dish-image" src={`https://spoonacular.com/recipeImages/${this.props.id}-480x360.jpg`} />
          </div>
        </div>
        <div className="recipe">
          <div className="recipe--max-width">
            <h2 className="recipe-header">Recipe</h2>
            <h3 className="recipe-dish">{this.props.dish}</h3>
            <div className="recipe--content">
              <div className="recipe-ingredients">
              </div>
              <div className="recipe-steps">
                <ol>
                {this.props.dishRecipe.map(this.listSteps)}
                {this.props.dishRecipe.map(this.listMoreSteps)}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <a className="pairings__footer" href="https://github.com/mariatnguyen" target="_blank" rel="noreferrer">mariatnguyen @ Github</a>
      </div>
    );
  }
}