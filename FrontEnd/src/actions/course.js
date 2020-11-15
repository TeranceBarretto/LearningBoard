import { SET_COURSE, CLEAR_COURSE } from "./types";

export const setcourse = (course) => (dispatch) => {
   dispatch({
    type: SET_COURSE,
    payload: { courseId : course },
  });
};

export const clearcourse = () => ({
  type: CLEAR_COURSE,
});