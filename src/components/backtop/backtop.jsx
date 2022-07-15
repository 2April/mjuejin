import React, { Component } from "react";

import "./index.scss";

import backtop from "../../assets/images/backtop.svg";

export default class BackTop extends Component {
  state = {
    flag_scroll: false,
  };

  handleScroll = () => {
    this.scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
    if (this.scrollTop > 300) {
      this.setState({ flag_scroll: true });
    } else {
      this.setState({ flag_scroll: false });
    }
  };

  BackTop = () => {
    let timer = null;
    cancelAnimationFrame(timer);
    //获取当前毫秒数
    let startTime = +new Date();
    //获取当前页面的滚动高度
    let b = document.body.scrollTop || document.documentElement.scrollTop;
    let d = 500;
    let c = b;
    timer = requestAnimationFrame(function func() {
      let t = d - Math.max(0, startTime - +new Date() + d);
      document.documentElement.scrollTop = document.body.scrollTop =
        (t * -c) / d + b;
      timer = requestAnimationFrame(func);
      if (t === d) {
        cancelAnimationFrame(timer);
      }
    });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  render() {
    const { flag_scroll } = this.state;
    return (
      <div>
        {
          flag_scroll
          ? (
            <div className="back-top" onClick={this.BackTop}>
              <div className="back-top-btn">
                <img src={backtop} alt="" />
              </div>
            </div>
          )
          : null
        }
      </div>
    );
  }
}
