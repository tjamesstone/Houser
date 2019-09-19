import React, {Component} from 'react'
import House from '../House/House'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class Dashboard extends Component{
    constructor(){
        super()
        this.state={
            houses: []
        }
    }

    componentDidMount(){
        axios.get('/api/houses')
        .then(res => {
            this.setState({
                houses: res.data
            })
        })
        .catch(err => {
            console.log(err.response.request.response)
        })
    }

    render(){
        const {houses} = this.state
        return(
            <div className="Dashboard">
                <div className="dashboardcontainer">
                    <div className="dashboardminicontainer">
                        <p
                        className="dashboardtitle"
                        >Dashboard</p>
                        <Link
                        to='/wizard'>
                            <button 
                                className="addnewhouse">
                                Add New Property
                            </button>
                        </Link>
                        
                    </div>
                    <div className="homelisting">
                        <h3>Home Listings</h3>
                    </div>
                        {houses.map(house => (
                            <House 
                            key={house.house_id}
                            id={house.house_id}
                            name={house.name}
                            address={house.address}
                            city={house.city}
                            state={house.state}
                            zipcode={house.zipcode}
                            />
                        ))}
                        
                    
                </div>
            </div>
        )
    }
}