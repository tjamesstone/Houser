import {createStore} from 'redux'

//INITIAL STATE
const initialState = {
    img: '',
    name: '',
    address: '',
    city: '',
    state: '',
    zipcode: 0,
    monthlyMortgage: 0,
    desiredRent: 0,
    houses: []

}





//ACTION CONSTS
export const ADD_IMG = 'ADD_IMG'
export const ADD_NAME = 'ADD_NAME'
export const ADD_ADDRESS = 'ADD_ADDRESS'
export const ADD_CITY = 'ADD_CITY'
export const ADD_STATE = 'ADD_STATE'
export const ADD_ZIPCODE = 'ADD_ZIPCODE'
export const ADD_MONTHLY_MORTGAGE = 'ADD_MONTHLY_MORTGAGE'
export const ADD_DESIRED_RENT = 'ADD_DESIRED_RENT'
export const DELETE_HOUSE = 'DELETE_HOUSE'
export const CLEAR_STATE = 'CLEAR_STATE'

//REDUCER
function reducer (state=initialState, action) {
    switch(action.type){
      case ADD_NAME:
        return {...state, name: action.payload}
      case ADD_ADDRESS:
        return {...state, address: action.payload}
      case ADD_CITY:
        return {...state, city: action.payload}
      case ADD_STATE:
        return {...state, state: action.payload}
      case ADD_ZIPCODE:
        return {...state, zipcode: action.payload}
      case ADD_IMG:
        return {...state, img: action.payload}
      case ADD_MONTHLY_MORTGAGE:
        return {...state, img: action.payload}
      case ADD_DESIRED_RENT:
        return {...state, img: action.payload}
      case CLEAR_STATE:
        return {...state, name: '', address: '', city: '', state: '', zipcode: 0, img: '', mortgage: 0, rent: 0}
      default:
        return state
    }
  }


//EXPORT THE STORE BY DEFAULT
export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())