import React, { Component } from "react";
import { Route } from "react-router-dom";

import Home from "./pages/home/home";
import History from "./pages/history/history";
import Detail from "./pages/detail/detail";

import BackTop from "./components/backtop/backtop";
import Footer from "./components/footer/footer";

import "./app.scss";
export default class App extends Component {
  render() {

    return (
      // TODO 状态保持
      <div className="app">
        <div className="app-content">
          <Route path="/post/:id" exact component={Detail} />
          <Route path="/history" exact component={History} />
          <Route path="/" exact children={props=> {
            return (
              <div style={props.match ? null : { display: 'none' }}>
                <Home {...props}/>
              </div>
            )
          }} />
          <BackTop />
          <Footer /> 
        </div>
      </div>
    );
  }
}
