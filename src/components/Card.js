import React, { Component } from 'react';

class Card extends React.Component {

    constructor() {
        super();
        this.state = {
            image: './public/images/item.png'
        }
    }

    render() {
        return (
            <div class="card" style="width: 18rem;" onClick={ }>
                <img src={this.state.image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{this.props.productName}</h5>
                    <p class="card-text">{this.props.price}</p>
                </div>
            </div>
        )
    }

}

export default Card