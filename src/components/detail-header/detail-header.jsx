import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "./index.scss";
import back from "../../assets/images/back.svg";

class DetailHeader extends Component {

  goBack = () => {
    this.props.history.goBack();
  }

  render() {
    return (
      <div className="detail-header">
        <div className="wrap">
          <div className="back item" onClick={this.goBack}>
            <img src={back} alt="返回" />
          </div>
          <div className="title item">
            { this.props.title }
          </div>
          <div className="block"></div>
        </div>
      </div>
    );
  }
}

export default withRouter(DetailHeader);
