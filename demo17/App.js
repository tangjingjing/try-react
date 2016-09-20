/**
 * Created by Administrator on 2016/9/20.
 */
import React from 'react';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: props.count
        };
        // advice! bind first
        this.tick = this.tick.bind(this);
    }
    tick() {
        // wrong! this.state = {}
        this.setState({
            count: this.state.count + 1
        });
    }
    render() {
        // three different ways
        // advice! the first one
        return <div onClick={this.tick}>count: {this.state.count} </div>
        // return <div onClick={this.tick.bind(this)}>count: {this.state.count} </div>
        // return <div onClick={() => this.tick()}>count: {this.state.count} </div>
    }
}

App.defaultProps = { count: 0};
App.propTypes = { count: React.PropTypes.number};