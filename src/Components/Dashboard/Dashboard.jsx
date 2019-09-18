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
                Dashboard
                    <Link
                    to='/wizard'>
                        <button 
                            className="addnewhouse">
                            Add New Property
                        </button>
                    </Link>
                <House />
            </div>
        )
    }
}