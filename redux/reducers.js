import {combineReducers} from 'redux';

export const reducer = (state = {profile: ""}, action) => {  
    switch (action.type) {
      case 'REQUEST_MESSAGE':
        return Object.assign({}, state, {
          isFetching: true
      });

      case 'REQUEST_MESSAGE_SUCCESS':
        return Object.assign({}, state, {
          isFetching: false,
          response: action.response
      });
  
      default:
        return {...state}
    }
};

export const reducers = combineReducers({  
  reducer: reducer,
});
