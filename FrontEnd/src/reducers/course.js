import { SET_COURSE, CLEAR_COURSE } from "../actions/types";

const initialState = { course: null };

export default function (state=initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_COURSE:
      return {
        ...state, 
        course: payload.courseId 
      };

    case CLEAR_COURSE:
      return { 
        ...state,
        course: null
       };

    default:
      return state;
  }
}