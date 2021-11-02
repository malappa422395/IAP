import {
    SET_SEARCH_FILTER,
    SET_ASSETS
} from '../types';
  
  const initialState = {
    data: [],
    allAssets: []
  };
  
  export default function userReducer(state = initialState, action) {
    switch (action.type) {
      case SET_SEARCH_FILTER:
        return {
          ...state,
          data: action.payload
        };
      case SET_ASSETS:
          return {
            ...state,
            allAssets: [...state.allAssets, ...action.payload]
          };
      default:
        return state;
    }
  }