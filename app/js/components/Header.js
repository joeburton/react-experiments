import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    render() {
        return (
            <header className="main-header">
                <span>It is {this.state.date.toLocaleTimeString()}.</span>
                <div className="toggle-nav" onClick={this.props.toggleNav} ></div>
            </header>
        );
    }
}