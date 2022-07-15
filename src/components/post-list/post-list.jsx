import React, { Component } from 'react';

import PostItem from "./post-item/post-item";

export default class PostList extends Component {
  render() {
    const { articles } = this.props;
    return (
      <div className="post-list">
        {
          articles.map(article => {
            return <PostItem key={article.article_id} article={article} />;
          })
        }
      </div>
    )
  }
}
