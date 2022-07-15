import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "./index.scss";

class Footer extends Component {
  state = {
    currentIndex: 0,
    tabList: [
      { name: "热门", id: "hot" },
      { name: "最新", id: "new" },
      { name: "历史", id: "history" },
    ],
  };

  tabClick = (id) => {
    const { categoryId } = this.props.location.state || {};

    switch (id) {
      case "hot":
        this.setState({currentIndex: 0});
        this.props.history.replace("/", { categoryId, sortType: "hot" });
        break;
      case "new":
        this.setState({currentIndex: 1});
        this.props.history.replace("/", { categoryId, sortType: "new" });
        break;
      case "history":
        this.setState({currentIndex: 2});
        this.props.history.replace("/history");
        break;
      default:
        break;
    }
  };

  render() {
    const { currentIndex, tabList } = this.state;
    
    return (
      <div className="footer">
        <div className="tab-list">
          {tabList.map((item, index) => {
            const { id, name } = item;
            return (
              <div
                className={`tab-item${index === currentIndex ? " active" : ""}`}
                key={id}
                onClick={() => this.tabClick(id)}
              >
                {name}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default withRouter(Footer);
