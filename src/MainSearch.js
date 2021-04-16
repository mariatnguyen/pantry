import React, { PureComponent } from "react";
import backgrounds from "./backgrounds.json";
import food from "./food.json";
import "./MainSearch.css";

export default class MainSearch extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      foodMatches: []
    };
    this.startSearch = this.startSearch.bind(this);
  }

  startSearch = (event) => {
    let input = event.target.value;
    let matches = food.filter((food) => {
      return food.name.match(new RegExp(`^${input.replace(/[`~!@#$%^&*()_|+=?;:,.<>{}[\]\\/]/gi, '')}`, 'gi'))
    });
    document.getElementById("search-results").classList.remove("hide");

    //if input is empty, hide search
    if (input === '' || input.length === 0) {
      document.getElementById("search-results").classList.add("hide")
    } else {
      this.setState({ foodMatches: matches });
    }
    this.searchDropdown(matches)
  }

  fadeMainSearch() {
    document.getElementById("main-search").classList.add("fadeOut");
    setTimeout(function () {
      document.getElementById("main-search").classList.add("hide");
    }, 1000);
  }

  searchDropdown = (match, index) => {
    return <li className="search-results__result" key={match.param} id={match.param} onClick={(e) => { this.props.setFood(e);this.fadeMainSearch() }}>{match.name}</li>
  }

  render() {
    return (
      <div id="main-search" className="main-search" style={{ backgroundImage: `url(${randomBackground})` }}>
        <div className="main-search--dark">
          <div className="main-search--center">
            <h1 className="main-search__logo"><img src="./images/pantry-white.svg"
              alt="Pantry"
              width="200"
              height="59" />
            </h1>
            <h2 className="main-search__header">What are we cooking today?</h2>
            <form className="search-bar">
              <div className="search-bar__field">
                <input id="search-bar__input" className="search-bar__input"
                  onChange={this.startSearch}
                  type="text"
                  placeholder="Search for a wine pairing"
                />
                <div className="search-bar__button">
                  <img src="./images/search.svg"
                    alt="search"
                    width="20"
                    height="20" />
                </div>
              </div>
              <div className="search-results hide" id="search-results">
                <ul className="search-results__dropdown" id="search-results__dropdown">
                  {this.state.foodMatches.length ? this.state.foodMatches.map(this.searchDropdown) : <li className="search-results__noresult">No results</li>}
                </ul>
              </div>
            </form>
          </div>
          <p className="main-search__footer"><a className="main-search__footer-link" href="https://github.com/mariatnguyen" target="_blank" rel="noreferrer">mariatnguyen @ Github</a></p>
        </div>
      </div>
    );
  }
}

//randomize background
const randomBackground = backgrounds[Math.floor(backgrounds.length * Math.random())];
