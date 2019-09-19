import React, {Component} from 'react'
import {Link} from 'react-router-dom'


export default class Wizard extends Component{
    constructor(){
        super()
        this.state={
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0
        }
    }

    render(){
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
                                <input type="text" className="nameinput"/>
                            </div>
                            <div className="address">
                                <h5>Address</h5>
                                <input type="text" className="addressinput"/>
                            </div>
                            <div className="citystatezip">
                                <div className="city">
                                    <h5>City</h5>
                                    <input type="text" className="cityinput"/>
                                </div>
                                <div className="state">
                                    <h5>State</h5>
                                    <input type="text" className="stateinput"/>
                                </div>
                                <div className="zipcode">
                                    <h5>Zipcode</h5>
                                    <input type="number" className="zipcodeinput"/>
                                </div>
                            </div>
                        </div>
                        <div className="wiz_complete_button">
                            <button
                            className="wiz_button"
                            >Complete</button>
                        </div>
                </div>
            </div>
        )
    }
}