import React, { Component } from 'react';

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

            </div>
        )
    }
}

export default Pay