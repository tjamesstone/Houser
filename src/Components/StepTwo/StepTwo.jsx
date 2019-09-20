import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import store, { img } from '../../store'


export default class StepTwo extends Component{
    constructor(){
        super()
        this.state = {
            img: '',
        }
    }

    render(){
        return(
            <div className="steptwo">
                
                 <h3>Image URL</h3>
                    <input 
                     name='img'
                    onChange={this.handleChange}
                    value={this.state.imgurl}
                    type="text" 
                    className="imginput"/>
                    <div className="next_step_button">
                            <Link 
                            to='/wizard/step3'>
                                <button
                                className="next_button"
                                >Next Step
                                </button>
                            </Link>
                    </div>
                    <div className="prev_step_button">
                        <Link
                        to='/wizard/step1'>
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