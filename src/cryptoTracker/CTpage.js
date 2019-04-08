import React from 'react'
import { Link } from 'react-router-dom'
import './CTpage.css'
import Crypto from './crypto/Crypto'


export default class CTpage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tickers: ["MSFT", "INTC", "NKE",  ],
            data: [],
            loaded: false
        }
    }

    componentWillMount() {
        console.log("I HAVE MOUNTED THE STEED OF VICTORY")
            let MSFT = fetch(`https://www.quandl.com/api/v3/datasets/EOD/MSFT?rows=4&api_key=hheUrozHHFy6b_NhdUU_`)
                .then(function(response) {
                    return response.json()
                })
            let NKE = fetch(`https://www.quandl.com/api/v3/datasets/EOD/NKE?rows=4&api_key=hheUrozHHFy6b_NhdUU_`)
            .then(function(response) {
                return response.json()
            })
            let INTC = fetch(`https://www.quandl.com/api/v3/datasets/EOD/INTC?rows=4&api_key=hheUrozHHFy6b_NhdUU_`)
            .then(function(response) {
                return response.json()
            }) 
            Promise.all([MSFT, NKE, INTC]).then(function(values) {
               this.setState({
                   data: values,
                   loaded: true
               })
            }.bind(this))
        }
            
    
    render() {
        const state = this.state.data
        const data = state.map((items, index) => {
            let dataset = Object.values(items)

            let table = dataset.map((items, index) => {
                let tableName = items.name
                let tableheader = items.column_names.map((items, index) => {
                    if (index < 9){
                        return <th className="MSFTheaderText">{items}</th>
                    }
                })
                let tableBody = items.data.map((items, index) => {
                    if (index < 9) {
                        return items.map((items, index) => {
                            if (index < 9) {
                                return <td className="MSFTbodyText">{items}</td>
                            }
                        })
                    }
                })
                return (
                    <table className="MSFTtable">
                        <tbody>
                            <tr>
                                <td className="MSFTtableTitle"><h3>{tableName}</h3></td>
                            </tr>
                            <tr className="MSFTheaderCtr">
                                    {tableheader}
                            </tr>
                            <tr className="MSFTbody">
                                    {tableBody}
                            </tr>
                        </tbody>
                    </table>
                )
            })
            return table
        })
        return(
            <div className="totalCT">
                <ul className="navBar-toDo">
                    <li><Link to ='/' className="navBar-Proj-toDo">Home</Link></li>
                    <li><a href="contact" className="navBar-Contact-toDo">Contact Me</a></li>
                </ul>
                <div>
                    
                    <div className="financeTrack">
                        <div className="financeTitle">
                            <h1>Finance Tracker</h1>
                        </div>
                        <div className="financeBody">
                                {data}
                        </div>
                    </div>
                    <div className="cryptoTrack">
                        <div className="financeTitle">
                            <h1>Crypto Currency</h1>
                        </div>
                        <div>
                            <Crypto />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
