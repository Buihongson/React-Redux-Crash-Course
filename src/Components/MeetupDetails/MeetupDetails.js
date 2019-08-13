import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Table, Button } from "react-bootstrap";
import history from "../../history";
import { connect } from "react-redux";
import { deleteMeetup } from "../../actions/meetupActions";

class MeetupDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      details: {}
    };
  }

  componentDidMount() {
    this.getDetailsMeetup();
  }

  getDetailsMeetup = () => {
    const id = this.props.match.params.id;

    axios({
      method: "GET",
      url: `http://localhost:3001/api/meetups/${id}`
    })
      .then(res => this.setState({ details: res.data }))
      .catch(error => console.log(error));
  };

  // Delete meetup
  onDetele = () => {
    const id = this.props.match.params.id;

    this.props.deleteMeetup(id);

    setTimeout(() => {
      history.push("/")
    }, 1000);
  };

  render() {
    const { details } = this.state;

    return (
      <div className="mt-3">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Time</th>
              <th>Address</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{details.name}</td>
              <td>{details.time}</td>
              <td>{details.address}</td>
              <td>
                <Link to={`/edit-meetup/${details.id}`} className="link">
                  <Button variant="primary">EDIT</Button>
                </Link>
                <Button
                  variant="danger"
                  className="ml-2"
                  onClick={this.onDetele}
                >
                  DELTE
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
        <Link to="/" className="link">
          <Button variant="primary">BACK</Button>
        </Link>
      </div>
    );
  }
}

const createStateToProps = state => ({});

const mapDispathToProps = (dispath, props) => {
  return {
    deleteMeetup: id => {
      dispath(deleteMeetup(id));
    }
  };
};

export default connect(
  createStateToProps,
  mapDispathToProps
)(MeetupDetails);
