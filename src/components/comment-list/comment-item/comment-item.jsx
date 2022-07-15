import React, { Component } from 'react';

import ReplyList from "../reply-list/reply-list";

import { getTimeFromCurrnt } from "../../../utils/common";

import "./index.scss";

export default class CommentItem extends Component {
  render() {
    const { user_info, reply_infos, comment_info } = this.props.comment;

    return (
      <div className="comment-item">
        <img className="avatar" src={user_info.avatar_large} alt="用户头像"/>
        
        <div className="comment-content">
          <div className="main">
            <div className="meta">
              <div className="user-name">{ user_info.user_name }</div>
              <div className="dividing"></div>
              <div className="date">{getTimeFromCurrnt(comment_info.ctime * 1000)}</div>
            </div>

            <div className="content">
              { comment_info.comment_content }
            </div>

            <div className="info-list">
              <div className="like item">
                <i></i>
                { comment_info.digg_count ? comment_info.digg_count : "点赞" }
              </div>

              <div className="comment item">
                <i></i>
                {
                  reply_infos.length ? reply_infos.length : "回复"
                }
              </div>
            </div>

            {
              reply_infos ? <ReplyList reply_infos={reply_infos} /> : null
            }
          </div>
        </div>
      </div>
    )
  }
}
