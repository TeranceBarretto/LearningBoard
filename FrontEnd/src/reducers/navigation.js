import { SET_NAVIGATION, CLEAR_NAVIGATION } from "../actions/types";
import * as NAVIGATION_TYPES from "../navigation/navigationTypes";

const initialState = { navigation: NAVIGATION_TYPES.NAVIGATION.DEFAULT };

export default function (state=initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_NAVIGATION:
      return {
        ...state, 
        navigation: payload.navigation 
      };

    case CLEAR_NAVIGATION:
      return { 
        ...state,
        navigation: NAVIGATION_TYPES.NAVIGATION.DEFAULT
       };

    default:
      return state;
  }
}