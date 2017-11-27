import React from 'react';

export class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        let details = [];

        for (let i = 0; i < this.props.items.length; i++) {

            details.push(
                <ul className="content" key={i}>
                    <li>{this.props.items[i].description}</li> | <li>{this.props.items[i].item1}</li> | <li>{this.props.items[i].item2}</li>
                </ul>
            );

        }
        return (
            <section className="footer">
                {details}
            </section>
        );
    }
}