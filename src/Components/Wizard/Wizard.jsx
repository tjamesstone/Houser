import React, {Component} from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import StepOne from '../StepOne.jsx/StepOne'
import StepTwo from '../StepTwo/StepTwo'
import StepThree from '../StepThree/StepThree'
import store, {CLEAR_STATE} from '../../store'


export default class Wizard extends Component{
    constructor(){
        super()
        this.state={
            mortgage: 0,
            rent: 0
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
                                    onClick={()=>{store.dispatch({type:CLEAR_STATE})}}
                                    className="cancelbutton">
                                    Cancel
                                </button>
                            </Link>
                        </div>
                        
                        
                        <Switch>
                            <Route path='/wizard/step1' component={StepOne}/>
                            <Route path='/wizard/step2' component={StepTwo}/>
                            <Route path='/wizard/step3' component={StepThree}/>
                        </Switch>
                </div>
            </div>
        )
    }
}