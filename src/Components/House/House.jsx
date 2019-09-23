import React, {Component} from 'react'

export default class House extends Component{
    constructor(){
        super()
        this.state={

        }
        // this.delete = this.delete.bind(this)
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
        const {id, img, name, address, city, state, zipcode, rent, mortgage} = this.props
        // console.log(this.props.id)
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
                    <p>Monthly Mortgage: {mortgage}</p>
                    <p>Desired Rent: {rent}</p>
                    <button 
                    onClick={() => this.props.delete(id, name)}
                    className="x">
                        X
                    </button>
                </div>
                
            </div>
        )
    }
}