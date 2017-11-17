import React from 'react';

export default class Content extends React.Component {
    constructor(props) {
        super(props);
    }
   render() {
        console.log(this.props)

        let transactionFrom = [];
        let billAmount = [];
    
        for (let i = 0; i < this.props.items.length; i++) {
            
            let item = '';
    
            if (this.props.items[i].conversionRate === 1) {
                transactionFrom.push(<span className="copy-reference text-left" key={i}>{this.props.items[i].description}<br/></span>);
            } else {
                transactionFrom.push(<span className="copy-reference text-left" key={i}>{this.props.items[i].description} at {this.props.items[i].conversionRate}</span>)
            }

            billAmount.push(<p className="copy-total" key={i}>{this.props.items[i].transactionCurrency + this.props.items[i].billAmount}</p>);

        }
        return (
            <section className="content">
                <h1>React Motion - Navigation</h1>
                {transactionFrom}
                {billAmount}
            </section>
        );
    }
}
