import React, { Component } from 'react';
import Card from './Card'

class Pay extends Component {

    constructor() {
        super();
        this.state = {
            basket: [],
            total: 0,
            totalTVA: 0,
            totalEcoTax: 0,
            totalTTC: 0,
        }

    }

    handleSelect(name, price) {
        console.log(name, price);
    }

    render() {
        return (
            <div>
                {this.props.items.map(function (items) {
                    return (
                        <Card
                            onClick={() => this.handleSelect(items.name, items.price)}
                            productName={items.name}
                            price={items.price}
                        />
                    )
                }
                )}
                <p>{this.state.basket}</p>
                <p>Total = {this.state.total}</p>
                <p>Total TVA = {this.state.totalTVA}</p>
                <p>Total Ecotax = {this.state.totalEcoTax}</p>
                <p>Total TTC = {this.state.totalTTC}</p>
            </div>
        )
    }
}

export default Pay