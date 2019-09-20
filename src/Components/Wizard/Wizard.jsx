import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


export default class Wizard extends Component{
    constructor(){
        super()
        this.state={
            img: '',
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
    

        // console.log(this.state.name)
        // console.log(this.state.zipcode)
        return(
            <div className="Wizard">
                <div className="wizardcontainer">
                    <div className="wizardminicontainer">
                        <h1>Add New Property</h1>
                        <Link
                            to='/'>
                                <button 
                                    className="cancelbutton">
                                    Cancel
                                </button>
                            </Link>
                        </div>
                        <div className="inputs">
                            <div className="name">
                                <h5>Property Name</h5>
                                <input 
                                name='name'
                                onChange={this.handleChange}
                                value={this.state.name}
                                type="text" 
                                className="nameinput"/>
                            </div>
                            <div className="address">
                                <h5>Address</h5>
                                <input 
                                name='address'
                                onChange={this.handleChange}
                                value={this.state.address}
                                type="text" 
                                className="addressinput"/>
                            </div>
                            <div className="citystatezip">
                                <div className="city">
                                    <h5>City</h5>
                                    <input 
                                    name='city'
                                    onChange={this.handleChange}
                                    value={this.state.city}
                                    type="text" 
                                    className="cityinput"/>
                                </div>
                                <div className="state">
                                    <h5>State</h5>
                                    <input 
                                    name='state'
                                    onChange={this.handleChange}
                                    value={this.state.state}
                                    type="text" 
                                    className="stateinput"/>
                                </div>
                                <div className="zipcode">
                                    <h5>Zipcode</h5>
                                    <input 
                                    name='zipcode'
                                    onChange={this.handleChange}
                                    value={this.state.zipcode}
                                    type="number" 
                                    className="zipcodeinput"/>
                                </div>
                            </div>
                        </div>
                        <div className="wiz_complete_button">
                            <button
                            onClick={this.postNewHouse}
                            className="wiz_button"
                            >Complete</button>
                        </div>
                </div>
            </div>
        )
    }
}