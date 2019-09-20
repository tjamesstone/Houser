import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import store, { ADD_IMG } from '../../store'


export default class StepTwo extends Component{
    constructor(props){
        super(props)
        const reduxState = store.getState()
        this.state = {
            reduxState: reduxState,
            img: reduxState.img,
        }
    }

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
    
      }

      updateState = () => {
        store.dispatch({
          type: ADD_IMG, payload: this.state.img
        })
      }

    render(){
        return(
            <div className="steptwo">
                
                 <h3>Image URL</h3>
                    <input 
                     name='img'
                    onChange={this.handleChange}
                    value={this.state.img}
                    type="text" 
                    className="imginput"/>
                    <div className="next_step_button">
                            <Link 
                            to='/wizard/step3'>
                                <button
                                onClick={() => this.updateState()}
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