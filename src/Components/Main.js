import React, { Component } from "react";
import { Route } from "react-router-dom";

import MeetupsList from "./Meetupslist/MeetupsList";
import About from "./Layouts/About";
import MeetupDetails from "./MeetupDetails/MeetupDetails";
import MeetupForm from "./MeetupForm/MeetupForm";
import EditMeetup from "./EditMeetup/EditMeetup";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={MeetupsList} />
        <Route exact path="/about" component={About} />
        <Route exact path="/meetup/:id" component={MeetupDetails} />
        <Route exact path="/add-meetup" component={MeetupForm} />
        <Route exact path="/edit-meetup/:id" component={EditMeetup} />
      </div>
    );
  }
}
