import React from 'react'
import '../CTpage.css'

export default class Crypto extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currency : []
        }
    }

    componentWillMount() {
        fetch("https://api.nomics.com/v1/currencies/ticker?key=1b123b7cce65c5cb657a7b9f13cfcefb&interval=1d,30d&quote-currency=EUR")
            .then(function(response) {
                return response.json()
            })
            .then(function(data) {
                let items = data.map((items, index) => {
                    if (index < 8) {
                        this.setState({
                            currency: [...this.state.currency, {items}]
                        })
                    }
                })
                return items
            }.bind(this))
    }

    render() {
        let crypto = this.state.currency.map((data, index) => {
            let price = data.items.price
            let currency = data.items.currency

            return (
                <tr className="cryptoBody" key={index}>
                    <td className="bodyName"><h2>{currency}</h2></td>
                    <td className="bodyPrice"><h3>${price}</h3></td>
                </tr>    
            )
        })
        return (
            <div>
                <table className="cryptoTable">
                    <tbody>
                        <tr className="cryptoHeaders">
                            <th className="cryptoName"><h2>Name</h2></th>
                            <th className="cryptoPrice"><h2>Price</h2></th>
                        </tr>
                            {crypto}
                    </tbody>
                </table>
            </div>
        )
    }
}