import React, {Component} from 'react'

export default class House extends Component{
    constructor(){
        super()
        this.state={

        }
    }

    render(){
        const defaultimg = "http://www.rangerwoodperiyar.com/images/joomlart/demo/default.jpg"

        let url
    
        if(this.state.img !== undefined){
          url = defaultimg
        } else {
          url = this.props.img
        }
        // console.log(url)
        const {img, name, address, city, state, zipcode} = this.props
        // console.log(this.props.houses_id)
        return(
            <div className="House">
                <div className="houseimage">

                    <img 
                    src={url}
                    className="actualhouseimage"
                    alt="house"/>
                </div>
                <div className="firstinfo">
                    <p>Property Name: {name}</p>
                    <p>Address: {address}</p>
                    <p>City: {city}</p>
                    <p>State: {state}</p>
                    <p>Zip: {zipcode}</p>
                </div>
                <div className="secondinfo">
                    <p>Monthly Mortgage: </p>
                    <p>Desired Rent: </p>
                    <button className="x">
                        X
                    </button>
                </div>
                
            </div>
        )
    }
}