import React, { Component } from 'react';


export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    this.setState({ term: e.target.value });
  }

  onFormSubmit(e) {
    e.preventDefault();

  }

  render() {
    return (
      <form className="searchform" onSubmit={this.onFormSubmit} >
      <div className="searchbox">
        <input
          placeholder="Search for items"
          className="search-field"
          value={this.state.term}
          onChange={this.onInputChange} />

        <span className="outer-search">
          <button type='submit' className="search-button">Search</button>
        </span>
        </div>
      </form>
    );
  }
}

