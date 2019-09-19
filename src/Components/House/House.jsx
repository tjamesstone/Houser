import React, {Component} from 'react'

export default class House extends Component{
    constructor(){
        super()
        this.state={

        }
    }

    render(){
        return(
            <div className="House">
                <div className="houseimage">
                    <img src="http://www.rangerwoodperiyar.com/images/joomlart/demo/default.jpg" 
                    className="actualhouseimage"
                    alt="house"/>
                </div>
                <div className="firstinfo">
                    Property Name:
                    <br/>
                    Address:
                    <br/>
                    City:
                    <br/>
                    State:
                    <br/>
                    Zip:
                </div>
                <div className="secondinfo">
                    Monthly Mortgage:
                    <br/>
                    Desired Rent:
                </div>
            </div>
        )
    }
}