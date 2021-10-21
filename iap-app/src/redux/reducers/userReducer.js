import {
    SET_SEARCH_FILTER,
} from '../types';
  
  const initialState = {
    data: []
  };
  
  export default function userReducer(state = initialState, action) {
    switch (action.type) {
      case SET_SEARCH_FILTER:
        return {
          ...state,
          data: action.payload
        };
      default:
        return state;
    }
  }