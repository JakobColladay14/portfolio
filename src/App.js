import React, { Component } from 'react';
import HomePage from './home/homePage'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CTpage from './cryptoTracker/CTpage'
import messengerPage from './messenger/messengerPage'
import toDoPage from './toDoApp/toDoPage';
import trelloPage from './trello/trelloPage'
import adminPage from './userAdmin/adminPage'

class App extends Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/crypto' component={CTpage} />
          <Route path='/messenger' component={messengerPage}/>
          <Route path='/toDo' component={toDoPage}/>
          <Route path='/trelloPage' component={trelloPage}/>
          <Route path='/adminPage' component={adminPage}/>
        </Switch>
      </Router>
    )
  }
}



export default App;
