import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";

export default class MeetupItem extends Component {
  render() {
    const { meetup } = this.props;

    return (
      <div>
        <ListGroup.Item><Link to={`/meetup/${meetup.id}`}>{meetup.name}</Link></ListGroup.Item>
      </div>
    )
  }
}
