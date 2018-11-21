import React, { Component } from 'react';
import './App.css';
import logo from './Love_Heart_symbol.svg';
import Board from './Board';
var texts = ["yo", "whats up", "test", "Stacy"];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: texts[0],
      index: 0,
      height:  document.body.clientHeight,
      width: document.body.clientWidth,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() =>
      this.setState({
        text: texts[this.state.index],
        index: (this.state.index + 1) % texts.length
      }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    window.removeEventListener('resize', this._handleResize);

  }
  render() {
    return (
      <Board height={this.state.height} width = {this.state.width}>
        <header className="App-header">
          Here's my header!
        </header>
        <div className="App-main">
          <div className="Top-Text">
            Hey I'm Daniel! 
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
      </Board>
    );
  }
}

export default App;
