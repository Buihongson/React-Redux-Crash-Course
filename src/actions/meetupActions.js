import * as types from "./types";
import axios from "axios";

// Get all meetup
export const getMeetups = () => dispath => {
  axios({
    method: "GET",
    url: "http://localhost:3001/api/meetups"
  })
    .then(res =>
      dispath({
        type: types.GET_MEETUPS,
        payload: res.data
      })
    )
    .catch(error => console.log(error));
};

// Add new meetup
export const addNewMeetup = newMeetup => dispath => {
  axios({
    method: "POST",
    url: "http://localhost:3001/api/meetups",
    data: newMeetup
  })
    .then(res =>
      dispath({
        type: types.ADD_MEETUP,
        payload: res.data
      })
    )
    .catch(error => console.log(error));
};

// Detele meetup
export const deleteMeetup = id => dispath => {
  axios({
    method: "DELETE",
    url: `http://localhost:3001/api/meetups/${id}`
  })
    .then(res =>
      dispath({
        type: types.DELETE_MEETUP,
        payload: id
      })
    )
    .catch(error => console.log(error));
};

// Edit meetup
export const editMeetup = (id, newMeetup) => dispath => {
  axios({
    method: "PUT",
    url: `http://localhost:3001/api/meetups/${id}`,
    data: newMeetup
  })
    .then(res => dispath({
      type: types.EDIT_MEETUP,
      payload: res.data
    }))
    .catch(error => console.log(error));
};
