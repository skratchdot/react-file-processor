import * as types from '../constants/ActionTypes';

export default function (state = [], action) {
  switch (action.type) {
    case types.SET_SELECTED_FILES:
      return action.files || [];
    default:
      return state;
  }
}
