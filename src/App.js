import React, { Component } from "react";
import "./App.css";
import EventList from "./components/events/EventList"
import SubmitEvent from "./components/SubmitEvent/SubmitEvent"

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
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>RunHub</h1>
          <p>Finding a Run Near You.</p>
        </header>
        <EventList events={this.state.events}/>
        <SubmitEvent />
      </div>
    );
  }
}

export default App;
