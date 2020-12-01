import {createStore, combineReducers, applyMiddleware} from 'redux';

import thunk from 'redux-thunk';

const initState = {
  firstName: 'John',
  lastName: 'Travolta',
}

const reducer = (state=initState, action) => {
  switch(action.type) {
    case 'CHANGE_FIRST_NAME':
      return {...state, firstName: action.payload};
    case 'CHANGE_LAST_NAME':
      return {...state, lastName: action.payload};
    default:
      return state
  }
}

const counterReducer = (state = 0, action) => {
    console.log(action, 'ACTION')
  switch(action.type) {
    case 'PLUS':
      return state + 1 
    default:
      return state
  }
}

const initStateNew = {
    firstName: 'newMember',
    lastName: '',
  }

const newPersonReducer = (state=initStateNew, action) => {
    switch(action.type) {
        case 'ADD_USER':
            return {...state, firstName: action.payload}
        default:
            return state
    }
}

const apiReqReducer = (state={response: 'no data'}, action) => {
  switch(action.type) {
    case 'SHOW_RESPONSE':
      return{...state, response: action.payload}
    default:
      return state
  }
}

const rootReducer = combineReducers({
  person: reducer,
  counter: counterReducer,
  newPerson: newPersonReducer,
  response: apiReqReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

// const changeFirstName = {
//   type: 'CHANGE_FIRST_NAME',
//   payload: 'Bill'
// }

// const changeLastName = {
//   type: 'CHANGE_LAST_NAME',
//   payload: 'Murrey'
// }

// console.log(store.getState(), 'STORE_GET_STATE1');


// store.dispatch(changeFirstName);

// console.log(store.getState(), 'STORE_GET_STATE2');

// store.dispatch(changeLastName);
// console.log(store.getState(), 'STORE_GET_STATE3');