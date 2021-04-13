import React, { PureComponent } from "react";
import "./Pairings.css";

export default class Pairings extends PureComponent {
  render() {
    return (
      <div id="pairings" className="pairings hide">
        <div className="pairings__header">
          <div className="pairings__logo">
            <img src="./images/pantry.svg"
              alt="Pantry"
              width="100"
              height="30" />
          </div>
        </div>
        <div className="pairings-description">
          <h2 className="pairing-description__header">{this.props.foodSelection}</h2>
          <div className="pairing-description__text" key={this.props.foodSelection + 'pairings-text'}  > 
            {this.props.pairings.pairingText ? this.props.pairings.pairingText : <p>No wine pairings found for <span className="pairing-description__food-selection">{this.props.foodSelection}</span>.</p>}
          </div>
        </div>
        <a className="pairings__footer" href="https://github.com/mariatnguyen" target="_blank" rel="noreferrer">mariatnguyen @ Github</a>
      </div>
    );
  }
}