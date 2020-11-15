import { SET_NAVIGATION, CLEAR_NAVIGATION } from "./types";

export const setnavigation = (navigation) => (dispatch) => {
   dispatch({
    type: SET_NAVIGATION,
    payload: { navigation : navigation },
  });
};

export const clearnavigation = () => ({
  type: CLEAR_NAVIGATION,
});