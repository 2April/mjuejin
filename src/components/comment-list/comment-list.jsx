import React, { Component } from "react";

import CommentItem from "./comment-item/comment-item";

import "./index.scss";

export default class CommentList extends Component {
  render() {
    const { comments } = this.props;
    return (
      <div className="comment-list">
        <div className="title">全部评论</div>
        {
          comments.map(comment => {
            return <CommentItem key={comment.comment_id} comment={comment} />
          })
        }
      </div>
    );
  }
}
