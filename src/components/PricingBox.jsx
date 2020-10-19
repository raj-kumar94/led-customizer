import React, { Component } from 'react'

export class PricingBox extends Component {
    render() {
        return (
            <div className="pricing__box">
                <div className="pricing__action">
                    <span className="pricing__price-details">
                        <span className="price-label">PRICE</span> 
                        <span className="price money" data-wg-notranslate="manual">$150.00</span>
                    </span> 
                    <button className="pricing__btn">Finish</button>
                </div>
            </div>
        )
    }
}

export default PricingBox
