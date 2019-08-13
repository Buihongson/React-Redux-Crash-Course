import * as types from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.GET_MEETUPS:
      return {
        ...state,
        items: action.payload
      };
    case types.ADD_MEETUP:
      return {
        ...state,
        item: action.payload
      };
    case types.DELETE_MEETUP:
      const filMeetups = state.items.filter(meetup => {
        return meetup.id !== action.payload;
      });
      return {
        ...state,
        // items: filMeetups
      };
    case types.EDIT_MEETUP:
      return {
        ...state
      };

    default:
      return state;
  }
}
