import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { bus } from "../../utils/bus";

import "./index.scss";

class HomeHeader extends Component {

  state = {
    currentId: 0,
    tagList: [],
  }

  navClick = (id) => {
    bus.emit("navChange");
    // 动态类名
    this.setState({currentId: id});
    // 点击路由切换，state传递参数
    const { sortType } = this.props.location.state || {};
    this.props.history.push("/", { categoryId: id, sortType });
  }

  render() {
    const { categories } = this.props;
    
    return (
      <div className="home-header">
        <div className="nav-wrap">
          {
            categories.map((item, index) => {
              const { category_name, category_id } = item;

              return (
                <div
                  className={`nav-item${category_id === this.state.currentId ? " active" : ""}`}
                  key={category_id}
                  onClick={() => this.navClick(category_id)}
                >
                  {category_name}
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default withRouter(HomeHeader);
