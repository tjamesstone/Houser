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
                    <p>Property Name: </p>
                    <p>City: </p>
                    <p>State: </p>
                    <p>Zip: </p>
                </div>
                <div className="secondinfo">
                    <p>Monthly Mortgage: </p>
                    <p>Desired Rent</p>
                    <div className="x">
                        X
                </div>
                </div>
                
            </div>
        )
    }
}