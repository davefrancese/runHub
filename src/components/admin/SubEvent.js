import React, { Component } from 'react';

class SubEvent extends Component {
  render() {
    return (
      <div className="subevent-list-item">
          <h1><i className="fa fa-calendar" aria-hidden="true"></i> {this.props.submit.date}</h1>
          <h2><i className="fa fa-ticket" aria-hidden="true"></i> {this.props.submit.name}</h2>
          <h2><i className="fa fa-road" aria-hidden="true"></i> {this.props.submit.distance}</h2>
          {/* --- DETAILS --- */}
          <hr />
          <h3>{this.props.submit.location}</h3>
          <a href={`${this.props.submit.website}`} target="_blank">{this.props.submit.website}</a>
          <p>Contact: {this.props.submit.contact_name}</p>
          <p>Email: {this.props.submit.contact_email}</p>
          <p>Phone: {this.props.submit.contact_phone}</p>
          <p>Facebook: <a href={`$this.props.submit.fb_page`}>{this.props.submit.fb_page}</a></p>
          <p>Twitter: {this.props.submit.twitter}</p>
          <p>Instagram: {this.props.submit.instagram}</p>
          <p>{this.props.submit.description}</p>
          <button className="ade-button submit-button">Approve</button>
          <button className="ade-button submit-button">Deny</button>
          <button className="ade-button submit-button">Edit</button>
      </div>
    );
  }
}

export default SubEvent;
