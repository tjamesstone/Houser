import React, {Component} from 'react'
import House from '../House/House'
import {Link} from 'react-router-dom'

export default class Dashboard extends Component{
    constructor(){
        super()
        this.state={

        }
    }

    render(){
        return(
            <div className="Dashboard">
                <div className="dashboardcontainer">
                    <div className="dashboardminicontainer">
                        <p
                        className="dashboardtitle"
                        >Dashboard</p>
                        <Link
                        to='/wizard'>
                            <button 
                                className="addnewhouse">
                                Add New Property
                            </button>
                        </Link>
                        
                    </div>
                    <div className="homelisting">
                        <h3>Home Listings</h3>
                    </div>
                    <House />
                    
                </div>
            </div>
        )
    }
}