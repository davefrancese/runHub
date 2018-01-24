import React, { Component } from 'react';

class SubmitEvent extends Component {
  render() {
    return (
      <div className="submit-event-container">
        <h1>Submit a Run Event</h1>
        <form>
          <p className="input-label">Event Name</p>
          <input className="submit-input" type="text" placeholder=""/>
          <p className="input-label">Event Distance</p>
          <input className="submit-input" type="text" placeholder=""/>
          <br />
          <p className="input-label">Event City</p>
          <input className="submit-input" type="text" placeholder=""/>
          <p className="input-label">Event State</p>
          <input className="submit-input" type="text" placeholder=""/>
          <br />
          <p className="input-label">Event Zip Code</p>
          <input className="submit-input" type="text" placeholder=""/>
          <p className="input-label">Event Website</p>
          <input className="submit-input" type="text" placeholder=""/>
          <br />
          <p className="input-label">Contact Name</p>
          <input className="submit-input" type="text" placeholder=""/>
          <p className="input-label">Contact Email</p>
          <input className="submit-input" type="text" placeholder=""/>
          <br />
          <p className="input-label">Contact Phone</p>
          <input className="submit-input" type="text" placeholder=""/>
          <p className="input-label">Facebook Page URL</p>
          <input className="submit-input" type="text" placeholder=""/>
          <br />
          <p className="input-label">Event Twitter</p>
          <input className="submit-input" type="text" placeholder=""/>
          <p className="input-label">Event Instagram</p>
          <input className="submit-input" type="text" placeholder=""/>
          <p className="input-label">Event Description</p>
          <textarea className="submit-input textarea" type="text" placeholder=""></textarea>
          <br />
          <button className="submit-button">Submit</button>
        </form>
      </div>
    );
  }
}

export default SubmitEvent;
