import React, { Component } from "react";

import PostList from "../../components/post-list/post-list";

import { getViewedArticles } from "../../utils/storage";

import "./index.scss";
export default class History extends Component {

  constructor() {
    super();
    this.getArticles();
  }

  state = {
    historyLoaded: false,
    articles: [],
  }

  getArticles = () => {
    const articles = getViewedArticles();
    
    this.setState({ articles, historyLoaded: true });
  }

  componentDidMount() {
    this.getArticles();
  }

  render () {
    const { articles, historyLoaded } = this.state;

    return (
      <div className="history">
        <div className="header">
          浏览记录
        </div>
        {
          !historyLoaded
          ? <div>Loading...</div>
          : <PostList articles={articles} />
        }
      </div>
    )
  }
};
