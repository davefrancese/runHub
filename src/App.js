import React, { Component } from "react";
import "./App.css";
import EventList from "./components/events/EventList"
import SubmitEvent from "./components/SubmitEvent/SubmitEvent"
import SubEventList from "./components/admin/SubEventList"
import Location from './components/events/Location'
import axios from "axios"

class App extends Component {
  constructor() {
    super()
    this.state = {
      events: [],
      submits: []
    }
  }

  async componentDidMount() {
    const response = await
    fetch('https://runhub-api.herokuapp.com/runhub')
    const json = await response.json()
    this.setState({events: json})

    const subresponse = await
    fetch('https://runhub-api.herokuapp.com/runhub/sub')
    const subjson = await subresponse.json()
    this.setState({submits: subjson})
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>RunHub</h1>
          <p>Finding a Run Near You.</p>
          <p className="admin-login"><a href="#">add event</a> || <a href="#">home</a></p>
        </header>

        <div className="main-content">

          <Location />
          <EventList events={this.state.events}/>
          {/* <SubmitEvent /> */}
          {/* <SubEventList submits={this.state.submits}/> */}
        </div>
      </div>
    );
  }
}

export default App;
