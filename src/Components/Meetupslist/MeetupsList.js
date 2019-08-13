import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { getMeetups } from "../../actions/meetupActions";

import MeetupItem from "../MeetupItem/MeetupItem"

class MeetupsList extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  // Get data from loopback
  componentDidMount() {
    this.props.getMeetups();
  }

  render() {
    const { meetups } = this.props;

    const elmMeetup = meetups.map((meetup, index) => {
      return <MeetupItem key={meetup.id} meetup={meetup}/>
    })

    return (
      <div>
        <h1>Meetupz</h1>
        <ListGroup>
          {elmMeetup}
        </ListGroup>
      </div>
    );
  }
}

const createStateToProps = state => ({
  meetups: state.meetups.items
})

export default connect(createStateToProps, { getMeetups })(MeetupsList);