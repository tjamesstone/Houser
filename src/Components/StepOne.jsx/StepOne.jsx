import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import store, { name, address, city, state, zipcode } from '../../store'


export default class StepOne extends Component{
    constructor(){
        super()
        this.state = {
            
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0
        }
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
                                onClick={this.postNewHouse}
                                className="next_button"
                                >Next Step
                                </button>
                            </Link>
                        </div>
            </div>
        )
    }
}