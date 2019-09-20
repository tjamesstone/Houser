import React, {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import store, { ADD_MONTHLY_MORTGAGE, ADD_DESIRED_RENT, CLEAR_STATE} from '../../store'
import axios from 'axios'

export default class StepThree extends Component{
    constructor(props){
        super(props)
        const reduxState = store.getState()
        this.state = {
            reduxState: reduxState,
            monthlyMortgage: reduxState.monthlyMortgage,
            desiredRent: reduxState.desiredRent,
            redirectToDashboard: false
        }
    this.submit = this.submit.bind(this)
    }

    componentDidMount() {
        this.setState({
          redirectToDashboard: false
        })
      }

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
    
      }

      updateState = () => {
        store.dispatch({
          type: ADD_MONTHLY_MORTGAGE, payload: this.state.monthlyMortgage
        })
        store.dispatch({
            type: ADD_DESIRED_RENT, payload: this.state.desiredRent
        })
      }

      
      async submit() {
        const { monthlyMortgage, desiredRent } = this.state
        const { name, address, city, state, zipcode, img } = this.state.reduxState
        let newHouse = {
          name,
          address,
          city,
          state,
          zipcode,
          img,
          monthlyMortgage,
          desiredRent
        }
        await axios.post('/api/houses', newHouse).catch(err => console.log(err))
        
          store.dispatch({ type: CLEAR_STATE })
    
          this.setState({
            redirectToDashboard: true
          })
    
      }
    

    

    render(){
        if (this.state.redirectToDashboard === true) {
            return <Redirect to='/' />
          }
        return(
            <div className="stepthree">

                <div className="rentinputs">
                    <h4>Recommended Rent: {this.state.monthlyMortgage * 1.25}</h4>
                    <div className="stepthreeinputs">
                                <div className="mortgage">
                                    <h3>Monthly Mortgage Amount</h3>
                                    <input 
                                    name='monthlyMortgage'
                                    onChange={this.handleChange}
                                    value={this.state.monthlyMortgage}
                                    type="number" 
                                    className="mortgageinput"/>
                                </div>
                                <div className="rent">
                                    <h3>Desired Monthly Rent</h3>
                                    <input 
                                    name='desiredRent'
                                    onChange={this.handleChange}
                                    value={this.state.desiredRent}
                                    type="number" 
                                    className="rentinput"/>
                                </div>
                                
                            </div>
                </div>

                        <div className="wiz_complete_button">
                            <Link 
                            to='/'>
                                <button
                                onClick={this.submit}
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