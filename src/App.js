import React, { Component } from "react"
import Article from "./components/Article"
import Header from "./components/Header"
import "./App.scss"

class App extends Component {
  state = {
    articles: [],
    category: "business",
    country: "us",
    limit: "20",
    loading: false
  }

  submitQueries = e => {
    e.preventDefault()

    this.setState({
      loading: true
    })

    fetch(
      `https://newsapi.org/v2/top-headlines?pageSize=${this.state.limit}&country=${this.state.country}&category=${this.state.category}&apiKey=${process.env.REACT_APP_API_KEY}`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          loading: false,
          articles: data.articles
        })
      })
  }

  handleEventChange = e => {
    const { name, value } = e.target

    this.setState({
      [name]: value
    })
  }

  render() {
    const article = this.state.articles.map(article => {
      return <Article key={article.url} article={article} />
    })

    return (
      <div>
        <Header
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
    )
  }
}

export default App
