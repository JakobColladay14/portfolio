import React from 'react'
import { Link } from 'react-router-dom'

export default class adminPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        console.log(this.state)
    }



    render() {
        return(
            <div>
                <div className="Ctr">
                <ul className="navBar">
                    <li><Link to ='/' className="navBar-Proj">Home</Link></li>
                    <li><a href="contact" className="navBar-Contact">Contact Me</a></li>
                </ul>
                    <div className="trelloCtr">
                        <div className="trelloTitle">
                            <h1>Home Page for User Dashboard</h1>
                        </div>
                        <div className="trelloBody">
                            Body
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
