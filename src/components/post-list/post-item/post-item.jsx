import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { getTimeFromCurrnt } from "../../../utils/common";
import { saveViewedArticle } from "../../../utils/storage";

import "./index.scss";

class PostItem extends Component {
  itemClick = (id) => {
    saveViewedArticle(this.props.article);
    this.props.history.push(`/post/${id}`);
  };

  render() {
    const { article } = this.props;
    const {
      article_id,
      article_info,
      author_user_info,
      category_info,
    } = article;

    return (
      <div className="post-item" onClick={() => this.itemClick(article_id)}>
        <div className="meta-wrap">
          <div className="author">{author_user_info.user_name}</div>
          <div className="dividing"></div>
          <div className="date">{getTimeFromCurrnt(article_info.ctime * 1000)}</div>
          <div className="dividing"></div>
          <div className="tag-list">
            <div className="tag">{category_info.first_category_name}</div>
            <i className="point"></i>
            <div className="tag">{category_info.second_category_name}</div>
          </div>
        </div>

        <div className="content-wrap">
          <div className="main">
            <div className="title">{article_info.title}</div>
            <div className="abstract">{article_info.brief_content}</div>
            <div className="info-list">
              <div className="view item">
                <i></i>
                {article_info.view_count}
              </div>
              <div className="like item">
                <i></i>
                {article_info.digg_count}
              </div>
              <div className="comment item">
                <i></i>
                {article_info.comment_count}
              </div>
            </div>
          </div>
          {/* TODO 实现图片懒加载 */}
          {article_info.cover_image ? (
            <img className="pic" src={article_info.cover_image} alt="加载中" />
          ) : null}
        </div>
      </div>
    );
  }
}

export default withRouter(PostItem);
