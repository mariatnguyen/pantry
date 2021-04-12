import React, { PureComponent } from "react";
import "./Pairings.css";

export default class Pairings extends PureComponent {
  
  showPairings = (data, index) => {
    return <div className="pairings-description">
      <h2 className="pairing-description__header">{this.props.wineSelection}</h2>
      <div className="pairing-description__text" key="pairings-text">{data.text}</div>
    </div>;
  }

  render() {
    return (
      <div className="pairings">
        <div className="pairings__header">
        <div className="pairings__logo">
          <img src="./images/pantry.svg"
            alt="Pantry"
            width="100"
            height="30" />
        </div>
        </div>
        {this.props.pairings.map(this.showPairings)}
        <a className="pairings__footer" href="https://github.com/mariatnguyen" target="_blank" rel="noreferrer">mariatnguyen @ Github</a>
      </div>
    );
  }
}