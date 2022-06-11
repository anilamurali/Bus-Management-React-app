
import Navbar from './Navbar'
import axios from 'axios'
import React, { useState } from 'react'


const Viewbus = () => {
    var [viewbus,setView]=useState([])
    axios.get("http://localhost:4500/api/viewbus").then((response)=>{
      console.log(response.data)
      setView(response.data)
    })
    const deleteBusApi=(id)=>{
      var data={"_id":id}
      console.log(data)
      axios.post("http://localhost:4500/api/deletebus",data).then((response)=>{
        if(response.data.status=="success")
        {
          alert("Successfully deleted")
        }
        else{
          alert("Error in deletion")
        }
      })

    }

  return (
    <div>
        <Navbar/>
        <div class="container">
    <div class="row ">
        <div class="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table table-striped table-dark">
                <thead>
                  <tr>
                    <th scope="col">ROUTE</th>
                    <th scope="col">BUS NAME</th>
                    <th scope="col">REGISTER NUMBER</th>
                    <th scope="col">OWNER NAME</th>
                    <th scope="col">CONTACT</th>
                    <th scope="col">DELETE</th>
                  </tr>
                </thead>
                <tbody>
                    {
                        viewbus.map((value,key)=>{
                       return <tr>
                             <td>{value.route}</td>
                             <td>{value.busname}</td>
                             <td>{value.regno}</td>
                             <td>{value.owner}</td>
                             <td>{value.contact}</td>
                             <td><button onClick={ ()=>{deleteBusApi(value._id)}} className='btn btn-info'>DELETE</button></td>
                        </tr>
                        })}
                </tbody>
              </table>
        </div>
    </div>
</div>
    </div>
  )
}

export default Viewbus