import React from 'react'

const Viewbus = () => {
    var viewbus=[{
        "route":"Pathanamthitta",
        "busname":"vanad",
        "busregisterno":"KL25F2020",
        "owner":"Ravi Thilakan",
        "contact":"954432333"
    }, 
    {
        "route":"punaloor",
        "busname":"Ashi",
        "busregisterno":"KL25F2520",
        "owner":"sathyan",
        "contact":"9544323004"
    }
]
  return (
    <div>
        <div class="container">
    <div class="row">
        <div class="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table table-striped table-dark">
                <thead>
                  <tr>
                    <th scope="col">ROUTE</th>
                    <th scope="col">BUS NAME</th>
                    <th scope="col">REGISTER NUMBER</th>
                    <th scope="col">OWNER NAME</th>
                    <th scope="col">CONTACT</th>
                  </tr>
                </thead>
                <tbody>
                    {
                        viewbus.map((value,key)=>{
                       return <tr>
                             <td>{value.route}</td>
                             <td>{value.busname}</td>
                             <td>{value.busregisterno}</td>
                             <td>{value.owner}</td>
                             <td>{value.contact}</td>
                             
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