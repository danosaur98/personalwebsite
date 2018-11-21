import React, { Component } from 'react';
function Square(props) {
    return (
        <button className="square" style={{ backgroundColor: '#fff' }} onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height: document.body.clientHeight,
            width: document.body.clientWidth,
        };
    }
    componentDidMount() {
        this._handleResize = this.handleResize.bind(this);
        window.addEventListener('resize', this._handleResize);
        setTimeout(this._handleResize, 1000);

        console.log(this.props);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this._handleResize);

    }
    handleResize() {
        this.setState({
          width: document.body.clientWidth,
          height: document.body.clientHeight,
        });
      }
    render() {
        return (
            <div className="App">
                <div className="Board">
                    <h1>
                        Height {this.state.height} Width {this.state.width}
                    </h1>
                </div>

                {this.props.children}
            </div>

        );
    }

}

export default Board;
