import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import store, { ADD_NAME, ADD_ADDRESS, ADD_CITY, ADD_ZIPCODE, ADD_STATE } from '../../store'


export default class StepOne extends Component{
    constructor(props){
        super(props)
        const reduxState = store.getState()
        this.state = {
            reduxState: reduxState,
            name: reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.state,
            zipcode: reduxState.zipcode
        }
    }

    updateState = () => {
        store.dispatch({
            type: ADD_NAME, payload: this.state.name
          })
          store.dispatch({
            type: ADD_ADDRESS, payload: this.state.address
          })
          store.dispatch({
            type: ADD_CITY, payload: this.state.city
          })
          store.dispatch({
            type: ADD_STATE, payload: this.state.state
          })
          store.dispatch({
            type: ADD_ZIPCODE, payload: this.state.zipcode
          })
    }

    clearState = () => {
        this.setState({
            img: '',
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0
        })
    }

    postNewHouse = () => {
        const {img, name, address, city, state, zipcode} = this.state
        let newHouse = {
            img: img,
            name: name,
            address: address,
            city: city,
            state: state,
            zipcode: zipcode
        }
        axios.post('/api/houses', newHouse).then(() => {
            this.clearState()
        })
    }

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
    
      }

    render(){
        return(
            <div className="stepone">
                <div className="inputs">
                            <div className="name">
                                <h3>Property Name</h3>
                                <input 
                                name='name'
                                onChange={this.handleChange}
                                value={this.state.name}
                                type="text" 
                                className="nameinput"/>
                            </div>
                            <div className="address">
                                <h3>Address</h3>
                                <input 
                                name='address'
                                onChange={this.handleChange}
                                value={this.state.address}
                                type="text" 
                                className="addressinput"/>
                            </div>
                            <div className="citystatezip">
                                <div className="city">
                                    <h3>City</h3>
                                    <input 
                                    name='city'
                                    onChange={this.handleChange}
                                    value={this.state.city}
                                    type="text" 
                                    className="cityinput"/>
                                </div>
                                <div className="state">
                                    <h3>State</h3>
                                    <input 
                                    name='state'
                                    onChange={this.handleChange}
                                    value={this.state.state}
                                    type="text" 
                                    className="stateinput"/>
                                </div>
                                <div className="zipcode">
                                    <h3>Zipcode</h3>
                                    <input 
                                    name='zipcode'
                                    onChange={this.handleChange}
                                    value={this.state.zipcode}
                                    type="number" 
                                    className="zipcodeinput"/>
                                </div>
                            </div>
                        </div>
                        <div className="next_step_button">
                            <Link 
                            to='/wizard/step2'>
                                <button
                                onClick={() => this.updateState()}
                                className="next_button"
                                >Next Step
                                </button>
                            </Link>
                        </div>
            </div>
        )
    }
}