import React, { PureComponent } from "react";
import food from "./food.json";
import "./SearchBar.css";

export default class SearchBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      foodMatches: []
    };
    this.searchResults = React.createRef();
    this.startSearch = this.startSearch.bind(this);
  }

  startSearch = (event) => {
    let input = event.target.value;
    let matches = food.filter((food) => {
      return food.name.match(new RegExp(`${input.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[`~!@#$%^&*()_|+=?;:,.<>{}[\]\\/]/gi, '')}`, 'gi'))
    });
    this.searchResults.current.classList.remove("hide");

    //if input is empty, hide search
    if (input === '' || input.length === 0) {
      this.searchResults.current.classList.add("hide")
    } else {
      this.setState({ foodMatches: matches });
    }
    this.searchDropdown(matches)
  }

  searchDropdown = (match, index) => {
    return <li className="search-results__result" key={match.param} id={match.param} onClick={(e) => {this.props.setFood(e);this.searchResults.current.classList.add("hide")}}>{match.name}</li>
  }

  render() {
    return (
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
        <div className="search-results hide" ref={this.searchResults} id="search-results">
          <ul className="search-results__dropdown" id="search-results__dropdown">
            {this.state.foodMatches.length ? this.state.foodMatches.map(this.searchDropdown) : <li className="search-results__noresult">No results</li>}
          </ul>
        </div>
      </form>
    );
  }
}