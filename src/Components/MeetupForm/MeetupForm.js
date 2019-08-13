import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import history from "../../history";
import { connect } from "react-redux";
import { addNewMeetup } from "../../actions/meetupActions";

class MeetupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      time: "",
      address: "",
      validated: false
    };
  }

  // Submit form to add meetup
  onSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    this.setState({ validated: true });

    const { name, time, address } = this.state;

    const newMeetup = {
      name: name,
      time: time,
      address: address
    };

    this.props.addNewMeetup(newMeetup);

    history.push("/")
  };

  // Get value from input
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, time, address, validated } = this.state;

    return (
      <div>
        <h1>Add meetup</h1>
        <Form noValidate validated={validated} onSubmit={this.onSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Meetup Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter meetup name"
              name="name"
              value={name}
              onChange={this.onChange}
            />
            <Form.Control.Feedback type="invalid">
              Please input meetup name
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Time</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter time"
              name="time"
              value={time}
              onChange={this.onChange}
            />
            <Form.Control.Feedback type="invalid">
              Please input time
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Address</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter address"
              name="address"
              value={address}
              onChange={this.onChange}
            />
            <Form.Control.Feedback type="invalid">
              Please input addres
            </Form.Control.Feedback>
          </Form.Group>
          <Button variant="primary" type="submit">
            ADD
          </Button>
        </Form>
      </div>
    );
  }
}

const createStateToProps = state => ({});

const mapDispathToProps = (dispath, props) => {
  return {
    addNewMeetup: newMeetup => {
      dispath(addNewMeetup(newMeetup));
    }
  };
};

export default connect(
  createStateToProps,
  mapDispathToProps
)(MeetupForm);
