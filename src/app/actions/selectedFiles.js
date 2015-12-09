import * as types from '../constants/ActionTypes';

export function setSelectedFiles(files = []) {
  return {
    type: types.SET_SELECTED_FILES,
    files: files
  };
}
