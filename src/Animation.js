//credits: https://philna.sh/blog/2018/09/27/techniques-for-animating-on-the-canvas-in-react/

import React, { Component } from 'react';
import './App.css';
import Canvas from './Canvas';


class Animation extends React.Component {
    constructor(props) {
        super(props);
        this.state = { angle: 0 };
        this.updateAnimationState = this.updateAnimationState.bind(this);
    }

    componentDidMount() {
        this.rAF = requestAnimationFrame(this.updateAnimationState);
    }

    updateAnimationState() {
        this.setState(prevState => ({ angle: prevState.angle + 1 }));
        this.rAF = requestAnimationFrame(this.updateAnimationState);
    }

    componentWillUnmount() {
        cancelAnimationFrame(this.rAF);
    }

    render() {
        return <Canvas angle={this.state.angle} width = {this.props.width} height = {this.props.height}  />
    }
}


export default Animation;
