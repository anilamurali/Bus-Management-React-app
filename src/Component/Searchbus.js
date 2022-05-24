import React, { useState } from 'react'

const Searchbus = () => {
    var [route,setRoute]=useState("")
    const searchRoute=()=>{
        var data={"route":route}
        console.log(data)
    }
  return (
    <div>
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
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Searchbus