import React, { Component } from 'react';

class SubmitEvent extends Component {
  render() {
    return (
      <div className="submit-event-container">
        <h1>Submit a Run Event</h1>
        <form>
          <input className="submit-input" type="text" placeholder="Event Name"/>
          <br />
          <input className="submit-input" type="text" placeholder="Event Distance"/>
          <br />
          <input className="submit-input" type="text" placeholder="Event City"/>
          <br />
          <input className="submit-input" type="text" placeholder="Event State - ex. NC"/>
          <br />
          <input className="submit-input" type="text" placeholder="Event Zip Code"/>
          <br />
          <textarea className="submit-input textarea" type="text" placeholder="Event Description"></textarea>
          <br />
          <input className="submit-input" type="text" placeholder="Event Website"/>
          <br />
          <input className="submit-input" type="text" placeholder="Contact Name"/>
          <br />
          <input className="submit-input" type="text" placeholder="Contact Email"/>
          <br />
          <input className="submit-input" type="text" placeholder="Contact Phone"/>
          <br />
          <input className="submit-input" type="text" placeholder="Facebook Page URL"/>
          <br />
          <input className="submit-input" type="text" placeholder="Event Twitter"/>
          <br />
          <input className="submit-input" type="text" placeholder="Event Instagram"/>
          <br />
          <button className="submit-button">Submit</button>
        </form>
      </div>
    );
  }
}

export default SubmitEvent;
