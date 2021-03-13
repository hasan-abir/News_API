import React, { Component } from 'react';
import Article from './components/Article';
import Search from './components/Search';
import TopMessage from './components/TopMessage';
import './App.scss';

class App extends Component {
  state = {
    articles: [],
    category: 'business',
    country: 'us',
    limit: '20',
    loading: false
  };

  submitQueries = (e) => {
    e.preventDefault();

    this.setState({
      loading: true
    });

    fetch(
      `https://newsapi.org/v2/top-headlines?pageSize=${this.state.limit}&country=${this.state.country}&category=${this.state.category}&apiKey=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          loading: false,
          articles: data.articles
        });
      })
      .catch((err) => alert(err.message));
  };

  handleEventChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    const article = this.state.articles.map((article) => {
      return <Article key={article.url} article={article} />;
    });

    return (
      <div className="container">
        <TopMessage />
        <header>
          <h1>News Headlines</h1>
          <p>Find out what's going on around the world!</p>
        </header>
        <Search
          handleEventChange={this.handleEventChange}
          category={this.state.category}
          country={this.state.country}
          submitQueries={this.submitQueries}
        />
        {this.state.loading ? (
          <div className="loading">
            <img src="spinner.svg" alt="" />
          </div>
        ) : (
          <div className="article-container">{article}</div>
        )}
      </div>
    );
  }
}

export default App;
