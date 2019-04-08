import React from 'react'
import { Link } from 'react-router-dom'
import './trello.css'

export default class trelloPage extends React.Component {


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
                            <h1>Home Page for Trello clone</h1>
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
 