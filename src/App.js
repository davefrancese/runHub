import React, { Component } from "react";
import "./App.css";
import EventList from "./components/events/EventList"
import SubmitEvent from "./components/SubmitEvent/SubmitEvent"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: [
        {
          id: 100,
          name: "Beach Trot",
          distance: "5k",
          date: "February 15, 2018",
          city: "Raleigh",
          state: "NC",
          zip: "27604",
          description: "This is a description all about the race.",
          website: "www.beachtrot.com",
          contact_name: "Brent Francese",
          contact_email: "brent@gmail.com",
          contact_phone: "555-555-5555",
          isApproved: false,
          admin_username: "brentfrancese",
          fb_page: "www.facebook.com/events/beachtrot",
          twitter: "@beachtrot",
          instagram: "@beachtrot"
        },
        {
          id: 200,
          name: "Turkey Trot",
          distance: "10k",
          date: "November 25, 2018",
          city: "Raleigh",
          state: "NC",
          zip: "27604",
          description: "This is a description all about the turkey trot race.",
          website: "www.turkeytrot.com",
          contact_name: "Brent Francese",
          contact_email: "brent@gmail.com",
          contact_phone: "555-555-5555",
          isApproved: false,
          admin_username: "brentfrancese",
          fb_page: "www.facebook.com/events/turkeytrot",
          twitter: "@turkeytrot",
          instagram: "@turkeytrot"
        }
      ]
    }
  }

  showEvents = () => {

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
