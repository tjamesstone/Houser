import {createStore} from 'redux'

//INITIAL STATE
const initialstate = {
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
function reducer(state = initialstate, action) {
    const {type, payload} = action
    switch(type){


        
        
        default:
            return state
    }
}


//EXPORT THE STORE BY DEFAULT
export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())