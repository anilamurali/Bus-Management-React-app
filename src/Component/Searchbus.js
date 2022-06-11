import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const Searchbus = () => {
    var [route,setRoute]=useState("")
    var [busData,setBus]=useState([{"busname":"","regno":"","owner":"","contact":""}])
    const searchRoute=()=>{
        var data={"route":route}
        console.log(data)
        axios.post("http://localhost:4500/api/searchbus",data).then((response)=>{
            console.log(response.data)
            setBus(response.data)

        })
        
    }
  return (
    <div>
        <Navbar/>
        <div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-3">
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Route</label>
                    <input onChange={(e)=>{setRoute(e.target.value)}} placeholder='Enter Route' type="text" class="form-control"/>
                </div>
                
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={searchRoute} class="btn btn-dark">SEARCH</button>
                </div>
                {
                   busData.map((value,key)=>{
                    return <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Bus Name</label>
                    <input value={value.busname}  type="text" class="form-control"/>
                    <label for="" class="form-label">Register Number</label>
                    <input value={value.regno}  type="text" class="form-control"/>
                    <label for="" class="form-label">Owner</label>
                    <input value={value.owner}  type="text" class="form-control"/>
                    <label for="" class="form-label">Contact</label>
                    <input value={value.contact}  type="text" class="form-control"/>
                </div>
                   })
                }
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Searchbus