import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import history from "../../history";
import { connect } from "react-redux";
import { editMeetup } from "../../actions/meetupActions";

class MeetupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      name: "",
      time: "",
      address: ""
    };
  }

  componentDidMount() {
    this.getDetailsMeetup();
  }

  // Get details meetup (Requeset)
  getDetailsMeetup = () => {
    const id = this.props.match.params.id;

    axios({
      method: "GET",
      url: `http://localhost:3001/api/meetups/${id}`
    })
      .then(res =>
        this.setState({
          id: res.data.id,
          name: res.data.name,
          time: res.data.time,
          address: res.data.address
        })
      )
      .catch(error => console.log(error));
  };

  // Submit form
  onSubmit = e => {
    e.preventDefault();
    const id = this.props.match.params.id;
    const { name, time, address } = this.state;

    const newMeetup = {
      name: name,
      time: time,
      address: address
    };

    this.props.editMeetup(id, newMeetup);

    history.push("/")
  };

  // Get value from input
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, time, address } = this.state;

    return (
      <div>
        <h1>Add meetup</h1>
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Meetup Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter meetup name"
              name="name"
              value={name}
              onChange={this.onChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Time</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter time"
              name="time"
              value={time}
              onChange={this.onChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter address"
              name="address"
              value={address}
              onChange={this.onChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            EDIT
          </Button>
        </Form>
      </div>
    );
  }
}

const createStateToProps = state => ({});

const mapDispathToProps = (dispath, props) => {
  return {
    editMeetup: (id, newMeetup) => {
      dispath(editMeetup(id, newMeetup));
    }
  };
};

export default connect(
  createStateToProps,
  mapDispathToProps
)(MeetupForm);
