import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const Addbus = () => {
    var [route,setRoute]=useState("")
    var [name,setName]=useState("")
    var [regno,setReg]=useState("")
    var [owner,setOwner]=useState("")
    var [contact,setContact]=useState("")
    const setData=()=>{
        var data={"route":route,"busname":name,"regno":regno,"owner":owner,"contact":contact}
        console.log(data)
        
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
                    <input onChange={(e)=>{setRoute(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Bus Name</label>
                    <input onChange={(e)=>{setName(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Bus Register Number</label>
                    <input onChange={(e)=>{setReg(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Owner Name</label>
                    <input onChange={(e)=>{setOwner(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Contact Number</label>
                    <input onChange={(e)=>{setContact(e.target.value)}} type="text" class="form-control"/>
                </div>
                
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={setData} class="btn btn-dark">SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
</div></div>
  )
}

export default Addbus