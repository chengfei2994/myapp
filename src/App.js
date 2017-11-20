import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Carousel} from "antd";
import logoIcon from './public/images/logo.jpg'
import wx from './public/images/wx.jpg'
import MyMenu from './react/components/myMenu'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" >{/**
            <img style={{ width: '300px',height: '123px',marginTop: '-30px',float:'left'}} src={logoIcon} />
            <img style={{ width: '80px',height: '80px',marginTop: '-11px',float:"right"}} src={wx} />**/}
            <div className="clear"></div>
        </header>
        <MyMenu />
      </div>
    );
  }
}

export default App;
