import React, { Component } from "react";

import { getTimeFromCurrnt } from "../../../../utils/common";

import "./index.scss";

export default class ReplyItem extends Component {
  render() {
    console.log(this.props.reply);
    const { reply_info, user_info } = this.props.reply;
    
    return (
      <div className="reply-item">
        <img className="avatar" src={user_info.avatar_large} alt="用户头像"/>
        
        <div className="reply-content">
          <div className="main">
            <div className="meta">
              <div className="user-name">{ user_info.user_name }</div>
              <div className="dividing"></div>
              <div className="date">{getTimeFromCurrnt(reply_info.ctime * 1000)}</div>
            </div>

            <div className="content">
              { reply_info.reply_content }
            </div>

            <div className="info-list">
              <div className="like item">
                <i></i>
                { reply_info.digg_count ? reply_info.digg_count : "点赞" }
              </div>

              <div className="comment item">
                <i></i>
                回复
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
