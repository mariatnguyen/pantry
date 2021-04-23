import React, { PureComponent } from "react";
import SearchBar from "./SearchBar";
import backgrounds from "./backgrounds.json";
import "./MainSearch.css";

export default class MainSearch extends PureComponent {
  render() {
    return (
      <div id="main-search" className={this.props.foodParam.length ? "main-search fadeOut" : "main-search"} style={{ backgroundImage: `url(${randomBackground})` }}>
        <div className="main-search--dark">
          <div className="main-search--center">
            <h1 className="main-search__logo"><img src="./images/pantry-white.svg"
              alt="Pantry"
              width="200"
              height="59" />
            </h1>
            <h2 className="main-search__header">What are we cooking today?</h2>
            <SearchBar setFood={this.props.setFood} foodParam={this.props.foodParam}/>
          </div>
          <p className="main-search__footer"><a className="main-search__footer-link" href="https://github.com/mariatnguyen" target="_blank" rel="noreferrer">mariatnguyen @ Github</a></p>
        </div>
      </div>
    );
  }
}

//randomize background
const randomBackground = backgrounds[Math.floor(backgrounds.length * Math.random())];
