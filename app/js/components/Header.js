import React from 'react';

export class Header extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            title: 'Dev experiments',
            date: this.formatDate()
        };

        this.formatDate = this.formatDate.bind(this);
    }
    formatDate () {
        let date = new Date();

        return date.toLocaleString();
    }
    componentDidMount () {
        setInterval(() => {
            this.setState({
                date: this.formatDate()
            })
        }, 1000)
    }
    render() {
        return (
            <header className="main-header">
                <h1>{this.state.title}</h1>
                <span className="date">{this.state.date}</span>
                <div className="toggle-nav" onClick={this.props.toggleNav} ></div>
            </header>
        );
    }
}