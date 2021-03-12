import React, { Component } from 'react';
import { countries, categories } from '../utilities/data';

class Search extends Component {
  state = {
    countries,
    categories,
    noOfArticles: [20, 30, 40, 50]
  };

  render() {
    return (
      <div className="search">
        <form onSubmit={this.props.submitQueries.bind(this)}>
          <div className="wrapper">
            <div className="input-group">
              <label>Select country you want news from..</label>
              <select
                value={this.props.country}
                onChange={this.props.handleEventChange.bind(this)}
                name="country"
              >
                {this.state.countries.map((country, index) => {
                  return (
                    <option value={country.abbr} key={index}>
                      {country.title}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="input-group">
              <label>Select category..</label>
              <select
                value={this.props.category}
                onChange={this.props.handleEventChange.bind(this)}
                name="category"
              >
                {this.state.categories.map((category, index) => {
                  return (
                    <option value={category.toLowerCase()} key={index}>
                      {category}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="input-group">
              <label>Select number of articles..</label>
              <select
                value={this.props.limit}
                onChange={this.props.handleEventChange.bind(this)}
                name="limit"
              >
                {this.state.noOfArticles.map((number, index) => {
                  return (
                    <option value={number} key={index}>
                      {number}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <button type="submit">GET NEWS</button>
        </form>
      </div>
    );
  }
}

export default Search;
