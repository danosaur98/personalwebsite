import React, { Component } from 'react';
import './App.css';
import logo from './Love_Heart_symbol.svg';
import Square from './Square';
import Animation from './Animation';
var texts = ["yo", "whats up", "test", "Stacy"];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: texts[0],
      index: 0,
      height: document.body.clientHeight,
      width: document.body.clientWidth,
      squares: []
    };
  }
  componentDidMount() {
    this._handleResize = this.handleResize.bind(this);
    window.addEventListener('resize', this._handleResize);
    setTimeout(this._handleResize, 1000);

    this.interval = setInterval(() =>
      this.setState({
        text: texts[this.state.index],
        index: (this.state.index + 1) % texts.length
      }), 1000);
  }

  handleResize() {
    this.setState({
      width: document.body.clientWidth,
      height: document.body.clientHeight,
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    window.removeEventListener('resize', this._handleResize);
  }

  render() {
    return (
      <div className="App">
        <div className="Board">
          <Animation width = {this.state.width} height = {this.state.height}></Animation>
        </div>
        <header className="App-header">
          Here's my header!
        </header>
        <div className="App-main">
          <div className="Top-Text">
            Hey I'm Daniel! Height: {this.state.height} Width: {this.state.width}
          </div>
          <div className="Logo-Text">
            {this.state.text}
          </div>
          <div className="Logo-Text"></div>
          <div className="App-logo-container">
            <img src={logo} className="App-logo" alt="logo" />
          </div>

        </div>
        <footer className="App-footer">
          Here's my footer!
        </footer>
      </div>
    );
  }
}

export default App;
