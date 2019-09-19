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
                        <input type="text" className="name"/>
                        <input type="text" className="address"/>
                        <input type="text" className="city"/>
                        <input type="text" className="state"/>
                        <input type="text" className="zipcode"/>
                </div>
            </div>
        )
    }
}