import React, { Component } from 'react';

import ReplyItem from "./reply-item/reply-item"; 

export default class ReplyList extends Component {
  render() {
    const { reply_infos } = this.props;
    return (
      <div className="reply-list">
        {
          reply_infos.map(reply => {
            return <ReplyItem key={reply.reply_id} reply={reply} />
          })
        }
      </div>
    )
  }
}
