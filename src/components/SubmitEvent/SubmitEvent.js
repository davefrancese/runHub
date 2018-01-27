import React, { Component } from 'react';
import axios from "axios"

class SubmitEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submission: false
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    let formData = new FormData(event.target);
    let submission = {
      name: formData.get('name'),
      distance: formData.get('distance'),
      city: formData.get('city'),
      state: formData.get('state'),
      zip: formData.get('zip'),
      website: formData.get('website'),
      contact_name: formData.get('contactName'),
      contact_email: formData.get('contactEmail'),
      contact_phone: formData.get('contactPhone'),
      isApproved: false,
      admin_username: 'brentfrancese',
      fb_page: formData.get('facebookUrl'),
      twitter: formData.get('twitter'),
      instagram: formData.get('instagram'),
      description: formData.get('description')
    }
    axios.post('mongodb://dfrancese:rundtr@ds113648.mlab.com:13648/runhub', submission)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });


  }

  render() {
    return (
      <div className="submit-event-container">
        {/* <h1>Submit a Run Event</h1>
        <form method="post" onSubmit={this.handleSubmit}>
          <p className="input-label">Event Name</p>
          <input className="submit-input" type="text" name="name"/>
          <p className="input-label">Event Distance</p>
          <input className="submit-input" type="text" name="distance"/>
          <p className="input-label">Event Date</p>
          <input className="submit-input" type="text" name="date"/>
          <br />
          <p className="input-label">Event City</p>
          <input className="submit-input" type="text" name="city"/>
          <p className="input-label">Event State</p>
          <input className="submit-input" type="text" name="state"/>
          <br />
          <p className="input-label">Event Zip Code</p>
          <input className="submit-input" type="text" name="zip"/>
          <p className="input-label">Event Website</p>
          <input className="submit-input" type="text" name="website"/>
          <p className="input-label">Event Location</p>
          <input className="submit-input" type="text" name="location"/>
          <br />
          <p className="input-label">Contact Name</p>
          <input className="submit-input" type="text" name="contactName"/>
          <p className="input-label">Contact Email</p>
          <input className="submit-input" type="text" name="contactEmail"/>
          <br />
          <p className="input-label">Contact Phone</p>
          <input className="submit-input" type="text" name="contactPhone"/>
          <p className="input-label">Facebook Page URL</p>
          <input className="submit-input" type="text" name="facebookUrl"/>
          <br />
          <p className="input-label">Event Twitter</p>
          <input className="submit-input" type="text" name="twitter"/>
          <p className="input-label">Event Instagram</p>
          <input className="submit-input" type="text" name="instagram"/>
          <p className="input-label">Event Description</p>
          <textarea className="submit-input textarea" type="text" name="description"></textarea>
          <br />
          <button type="submit" className="submit-button">Submit</button>
        </form> */}

        {/* --- CONFIRMATION --- */}

        <p><a href="#">home</a></p>
        <h3>Thanks! We're reviewing the event now.</h3>
        <h4>Your event may take a few days to be added to our calendar.</h4>

      </div>
    );
  }
}

export default SubmitEvent;
