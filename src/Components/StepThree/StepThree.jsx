import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import store, { monthlyMortgage, desiredRent} from '../../store'

export default class StepThree extends Component{
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <div className="stepthree">

                <div className="rentinputs">
                    <h4>Recommended Rent:</h4>
                    <div className="stepthreeinputs">
                                <div className="mortgage">
                                    <h3>Monthly Mortgage Amount</h3>
                                    <input 
                                    name='mortgage'
                                    onChange={this.handleChange}
                                    value={this.state.mortgage}
                                    type="number" 
                                    className="mortgageinput"/>
                                </div>
                                <div className="rent">
                                    <h3>Desired Monthly Rent</h3>
                                    <input 
                                    name='rent'
                                    onChange={this.handleChange}
                                    value={this.state.rent}
                                    type="number" 
                                    className="rentinput"/>
                                </div>
                                
                            </div>
                </div>

                        <div className="wiz_complete_button">
                            <Link 
                            to='/'>
                                <button
                                onClick={this.postNewHouse}
                                className="wiz_button"
                                >Complete
                                </button>
                            </Link>
                        </div>
                        <div className="prev_step_button">
                        <Link
                        to='/wizard/step2'>
                            <button
                            className='prev_button'
                            >
                                Previous Step
                            </button>
                        </Link>
                    </div>
                
            </div>
        )
    }
}