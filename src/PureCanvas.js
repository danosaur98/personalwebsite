import React, { Component } from 'react';
import './App.css';

class PureCanvas extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillReceiveProps() {
        if (this.props.width && this.props.width != 0) {
            this.setState({ expectedWidth: this.props.width })
        }
        if (this.props.width && this.state && this.state.expectedWidth && Math.abs(this.state.expectedWidth - this.props.width) >=20) {
            window.location.reload();
        }
    }
    shouldComponentUpdate() {
        if (this.props.height && this.props.height != 0) {
            return false;
        }
        else {
            return true;
        }
    }

    render() {
        return (
            <canvas width={this.props.width ? this.props.width : "300"}
                height={this.props.height ? this.props.height : "300"}
                ref={node => node ? this.props.contextRef(node.getContext('2d')) : null}
            />
        )
    }
}

export default PureCanvas