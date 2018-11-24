import React, { Component } from 'react';
import './App.css';
import PureCanvas from './PureCanvas';

class Canvas extends React.Component {
    constructor(props) {
        super(props);
        this.saveContext = this.saveContext.bind(this);
    }

    saveContext(ctx) {
        this.ctx = ctx;
    }

    componentDidUpdate() {
        const { angle } = this.props;
        const width = this.ctx.canvas.width;
        const height = this.ctx.canvas.height;
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.clearRect(0, 0, width, height);
        this.ctx.translate(width / 2, height / 2);
        this.ctx.rotate(angle * Math.PI / 180);
        this.ctx.fillStyle = '#4397AC';
        this.ctx.fillRect(-width / 4, -height / 4, width / 2, height / 2);
        this.ctx.restore();
    }

    render() {
        return <PureCanvas width={this.props.width}
            height={this.props.height}
            contextRef={this.saveContext}>
        </PureCanvas>;
    }
}

export default Canvas
