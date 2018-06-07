import React, { Component } from 'react';


export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    console.log(e.target.value);
    this.setState({ term: e.target.value });
  }

  onFormSubmit(e) {
    e.preventDefault();

  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Search for items"
          className=""
          value={this.state.term}
          onChange={this.onInputChange} />

        <span className="">
          <button type='submit' className="">Submit</button>
        </span>
      </form>
    );
  }
}

