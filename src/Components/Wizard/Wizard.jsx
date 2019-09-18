import React, {Component} from 'react'
import {Link} from 'react-router-dom'


export default class Wizard extends Component{
    constructor(){
        super()
        this.state={

        }
    }

    render(){
        return(
            <div className="Wizard">
                Wizard
                <Link
                    to='/'>
                        <button 
                            className="cancelbutton">
                            Cancel
                        </button>
                    </Link>
            </div>
        )
    }
}