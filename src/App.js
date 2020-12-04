
import './App.css';
import React from "react";
import { getArticles } from "./api";
import  ArticleList  from "./components/ArticleList";


class App extends React.Component {
  async componentDidMount() {
    try {
        const response = await getArticles();
        this.setState({ articles: response.articles });
    } catch (error) {
        this.setState({ apiError: "Could not find any articles"});
    }
}
  state = {
    articles: [],
    apiError: "",
  };
  render() {
  const { articles, apiError } = this.state;
  return (
    
    <div>
      <ul id="top-navbar">
      <li class = "go-green-digital">Go Green Digital</li>
      <li class="login">Log In</li>
      <li class="chat">Chat</li>
      <li class="c-calc">Carbon Footprint Calculator </li>
      <li class="actions">Actions</li>
      <li class="more-info">More Information</li>
      </ul>
      <h1> Latest News: </h1>
      <ul id="latest-news">
        <l1>{articles.length > 1 && <ArticleList articles={articles} />}</l1>
        {apiError && <p>Could not fetch any articles. Please try again.</p>}
      </ul>
      </div>
      

      
      

  );
  }

}

export default App;