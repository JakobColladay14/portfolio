import React from 'react'
import '../App.css'
import 'animate.css/animate.min.css'
import ScrollAnimation from 'react-animate-on-scroll'
import portrait from '../assets/pictures/portrait.jpg'



//Idea: Background image card is just the title and a logo for each. 
//Once clicked it expands over part of the screen providing more info on the project and with a gif of the project in action
export default class HomePage extends React.Component {


    handleProjClick = (props) => {
        const x = props.target.id
        switch (x) {
            case '0':
                this.props.history.push('/trelloPage')
                break;
            case '1':
                this.props.history.push('/adminPage')
                break;
            case '2':
                this.props.history.push('/crypto')
                break;
            case '3':
                this.props.history.push('/toDo')
                break;
            case '4':
                this.props.history.push('/messenger')
                break;
            case '5':
                //this.props.history.push('/undefined')
                break;
            default: 
                break;
        }
    }

    render() {
        return (
          <div className='Ctr'>
            <ul className="navBar">
                <li><a href="body" className="navBar-Proj">Projects</a></li>
                <li><a href="contact" className="navBar-Contact">Contact Me</a></li>
            </ul>
            <div className='header'>
                <ScrollAnimation animateIn="fadeIn" duration={1.5} delay={1}>
                    <div className='headerCard'>
                        <h2>Welcome</h2>
                        <p>Jakobs Portfolio</p>
                        <p>Well rounded Full-Stack Developer with a passion for learning and a drive for success. This project was created using JavaScript, React.JS, Node.JS, mySQL, CSS, Redux, and Third Party Api Integration(RESTful).
                         
                        </p>
                    </div>
                </ScrollAnimation>
            </div>
            <ScrollAnimation animateIn="bounceInUp" duration={1.5} delay={1}>
                <div className='body'>
                    <div className="bodyHeader">
                        <h1>Projects</h1>
                    </div>
                    <div className='appRow'>
                            <div className='appCtr'>
                                <div className='appCard'>
                                    <button type="btn"
                                        className="projBtn"
                                        onClick={this.handleProjClick}
                                        id={0}
                                    >
                                        Trello Clone
                                    </button>
                                </div>
                            </div>
                            <div className='appCtr'>
                                <div className='appCard'>
                                    <button type="btn"
                                        className="projBtn"
                                        onClick={this.handleProjClick}
                                        id={1}
                                    >    
                                        User Admin Dashboard
                                    </button>
                                </div>
                            </div>
                            <div className='appCtr'>
                                <div className='appCard'>
                                        <button type="btn"
                                            className="projBtn"
                                            onClick={this.handleProjClick}
                                            id={2}
                                        >
                                            Financial Tracker (Created with the Quandl and Nomics API)
                                        </button>
                                </div>
                            </div>
                    </div>
                    <div className='appRow'>
                        <div className='appCtr'>
                            <div className='appCard'>
                                <button type="btn"
                                    className="projBtn"
                                    onClick={this.handleProjClick}
                                    id={3}
                                >
                                    To do App
                                </button>
                            </div>
                        </div>
                        <div className='appCtr'>
                            <div className='appCard' >
                                <button type="btn"
                                    className="projBtn"
                                    onClick={this.handleProjClick}
                                    id={4}
                                >
                                    Messenger
                                </button>
                            </div>
                        </div>
                        <div className='appCtr'>
                            <div className='appCard'>
                                <button type="btn"
                                    className="projBtn"
                                    onClick={this.handleProjClick}
                                    id={5}
                                >
                                  Undefined  
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
            <div className='contact'>
                <ScrollAnimation animateIn="zoomInDown" duration={1.5} delay={1} animateOnce={true}>
                    <div className="contactCtr">
                        <div className="contactHeader">
                            <h1>Contact Me</h1>
                        </div>
                        <div className="contactImage">
                            <img className="portrait" src={portrait} alt="portrait"/>
                        </div>
                        <div className="contactText">
                            <div className="resume">
                                <div className="resumeTitle">
                                    <h1>Work History</h1>
                                </div>
                                <div className="resumeBody">
                                    <h3 className="workHist">Full Stack Developer at Eleveight</h3>
                                    <p className="workHist">Eleveight is a platform for scholarships, internships, jobs and organization case management
                                    to connect schools, students and funding organizations.
                                    </p>
                                        <ul className="workHistList">
                                            <li>Took initial concepts and developed project plans.</li>
                                            <li>Created a Rich Text Editor while using JS and React.</li>
                                            <li>Reviewed code, debugged problems and corrected issues.</li>
                                            <li>Provided continued maintenance and development of bug fixes and patch sets for existing web applications.</li>
                                            <li>Collaborated with clients from concept through final delivery of product.</li>
                                        </ul>
                                    <h3 className="workHist">Laguna Beach Ocean Lifeguard at City of Laguna Beach</h3>
                                    <p className="workHist">Guarded the beaches of Laguna Beach during peak season, providing rescue ability and also knowledge of the city.</p>
                                        <ul className="workHistList">
                                            <li>Enforced Regulations and laws of Laguna Beach while remaining cordially no matter the situation.</li>
                                            <li>Remained alert, ready and on my feet for long hours of the days.</li>
                                            <li>Performed under pressure and in high risk situations.</li>
                                        </ul>
                                </div>
                            </div>
                            <div className="skills">
                                <div className="skillTitle">
                                    <h3>Skills</h3>
                                </div>
                                <div className="skillBody">
                                    JavaScript ES6, React.JS, React Native, mySQL, Node.JS, CSS, Bootstrap, Ajax, VS Code, Postman, TFS, Git Bash, Agile/Scrum Methodologies, Third Party Api Integration,
                                </div>
                            </div>
                            <div className="info">
                                <h3 className="infoTitle">Contact Info</h3>
                                <p className='infoText'>LinkedIn: <a className="infoLink" href='https://www.linkedin.com/in/jakob-colladay-ba5930126/'>Jakob Colladay</a></p>
                                <p className='infoText'>Phone Number: 949-514-4604</p>
                                <p className='infoText'>Email: Jakob.colladay14@gmail.com</p>
                                <p className='infoText'>Willing to relocate to the Los Angeles area</p>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
          </div>
        )
    }
}

