import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: 'Dev experiments' };
    }
    render() {
        return (
            <header className="main-header">
                <h1>{this.state.title}</h1>
                <div className="toggle-nav" onClick={this.props.toggleNav} ></div>
            </header>
        );
    }
}