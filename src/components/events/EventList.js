import React, { Component } from 'react';
import Event from './Event'
import Location from './Location'

class EventList extends Component {
  render() {
    return (
      <div className="event-list-container">

        <h1>Events</h1>
        {this.props.events.map(event =>
          <Event
            key={event.id}
            event={event}
            />) }

      {/* --- SINGLE --- */}

        {/* <div className="single-event">
          <p><a href="#">back</a></p>
          <h1><i className="fa fa-calendar" aria-hidden="true"></i> Feb. 3, 2018</h1>
          <h2><i className="fa fa-ticket" aria-hidden="true"></i> Krispy Kreme Challenge</h2>
          <p><i className="fa fa-road" aria-hidden="true"></i> 5k</p>
          <hr />
          <h4>Raleigh, NC</h4>
          <p className="link"><a href='http://krispykremechallenge.com/'>http://krispykremechallenge.com/</a></p>
          <p>Contact: Elena Price</p>
          <p>Email: elena.price@krispykremechallenge.com</p>
          <p>Phone: 919-633-6631</p>
          <p>Facebook: N/A</p>
          <p>Twitter: @KrispyKremeChallenge</p>
          <p>Instagram: @KrispyKremeChallenge</p>
          <p>2400 calories, 12 doughnuts, 5 miles, 1 hour.  The mantra of the Krispy Kreme Challenge epitomizes the test of physical fitness and gastrointestinal fortitude.  What started as a challenge among ten friends has transformed into a nationally publicized charity race, and the number one tradition to complete before graduating from North Carolina State University. On February 4th, 2017, we hosted 6,711 people for the 13th annual Krispy Kreme Challenge, where we donated $190,000 to the UNC Children's Hospital, bringing the cumulative donation to an impressive $1,350,000. Participants begin the Challenge at the Memorial Belltower on the campus of North Carolina State University in Raleigh, NC. Runners then travel 2.5 miles through historic downtown Raleigh to the Krispy Kreme located at the intersection of Peace and Person Streets, where they attempt to consume one dozen original glazed doughnuts. The hardest part of the Challenge awaits them as they run 2.5 miles back to the Memorial Belltower. This is the Krispy Kreme Challenge.</p>
        </div> */}

      </div>
    );
  }
}

export default EventList;
