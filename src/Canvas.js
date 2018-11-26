import React, { Component } from 'react';
import './App.css';
import PureCanvas from './PureCanvas';
import Lightning from './Lightning';

class Canvas extends React.Component {
    constructor(props) {
        super(props);
        this.saveContext = this.saveContext.bind(this);
        this.state = { lightning: [] }
    }

    saveContext(ctx) {
        this.ctx = ctx;
    }

    componentDidUpdate() {
        const { angle } = this.props;
        const width = this.ctx.canvas.width;
        const height = this.ctx.canvas.height;
        this.ctx.save();
        this.ctx.clearRect(0, 0, width, height);
        this.ctx.beginPath();
        if (this.state.lightning.length < 1) {
            this.state.lightning.push(new Lightning(width / 2, window.innerHeight / 2, 10, Math.PI/4, this.ctx));
        }
        this.state.lightning.forEach(function (element) {
            element.update();
        })
        // this.ctx.translate(width / 2, window.innerHeight / 2);
        // this.ctx.rotate(angle * Math.PI / 180);
        // this.ctx.fillStyle = '#4397AC';
        // this.ctx.fillRect(-width / 4, -height / 4, width / 2, height / 2);

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
