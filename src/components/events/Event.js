import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Event extends Component {

  render() {
    return (
      <div className="event-list-item">
        <Link to={`${this.props.event.runId}`}>
          <h1><i className="fa fa-calendar" aria-hidden="true"></i> {this.props.event.date}</h1>
          <h2><i className="fa fa-ticket" aria-hidden="true"></i> {this.props.event.name}</h2>
          <p><i className="fa fa-road" aria-hidden="true"></i> {this.props.event.distance}</p>

          {/* --- DETAILS --- */}
          {/* <hr />
          <h4>{this.props.event.city}, {this.props.event.state}</h4>
          <p>Contact: {this.props.event.contact_name}</p>
          <p>Email: {this.props.event.contact_email}</p>
          <p>Phone: {this.props.event.contact_phone}</p>
          <p>Facebook: <a href={`$this.props.event.fb_page`}>{this.props.event.fb_page}</a></p>
          <p>Twitter: {this.props.event.twitter}</p>
          <p>Instagram: {this.props.event.instagram}</p>
          <p>{this.props.event.description}</p> */}
        </Link>
      </div>
    );
  }
}

export default Event;
