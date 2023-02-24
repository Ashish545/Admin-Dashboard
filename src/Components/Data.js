import React from 'react'

 function Data() {
  return (
    <div>
        <section className="multi-data">

            {/* Top row */}

            <div className="container-fluid my-5 ms-5">
                <div className="row gx-5">

                    <div className='col-12 col-md-3 ' >

                        <div className="info">
                            <h6>Gender</h6>
                            <h5>Male</h5>
                        </div>

                    </div>
                    <div className='col-12 col-md-3' >

                        <div className="info">
                            <h6>Birthday</h6>
                            <h5>Feb 24th,1997</h5>
                        </div>

                    </div>
                    <div className='col-12 col-md-3' >

                        <div className="info">
                            <h6>Phone Number</h6>
                            <h5>(239)555-0108</h5>
                        </div>

                    </div>
                    <div className='col-12 col-md-3' >

                        <div className="info">
                            <h6>Registration Date</h6>
                            <h5>Feb 24th,1997</h5>
                        </div>

                    </div>
                </div>
                <div className="row my-5 gx-5">

                    <div className='col-12 col-md-3' >

                        <div className="info">
                            <h6>Street Address</h6>
                            <h5>jL Diponegoro No. 21</h5>
                        </div>

                    </div>
                    <div className='col-12 col-md-3' >

                        <div className="info">
                            <h6>City</h6>
                            <h5>Cilacap</h5>
                        </div>

                    </div>
                    <div className='col-12 col-md-3' >

                        <div className="info">
                            <h6>Zip Code</h6>
                            <h5>655849</h5>
                        </div>

                    </div>
                    <div className='col-12 col-md-3' >

                        <div className="info">
                            <h6>Member Status</h6>
                            <h5>Active Member</h5>
                        </div>

                    </div>
                </div>
            </div>

            {/* center row */}

            <div className="container-fluid center-data ms-5">
                     <div className="row w-75 " style={{background:'#F9EFED '}}>

                               
                               <div className='col-12 col-md-4'>
                                 <a href="#">Upcoming Appointment</a>
                               </div>
                               <div className='col-12 col-md-4'>
                               <a href="#">Upcoming Appointment</a>
                               </div>
                               <div className='col-12 col-md-4'>
                               <a href="#">Upcoming Appointment</a>
                               </div>

                        
                            
                            </div>
            </div>

            {/* Bottom row */}

            <section className='bottom-row'>

                <div className='top-heading'>
                    <h4>Root Canal Treatment</h4>
                    <button>Show Previous Treatment</button>
                </div>

                <div className="container">
                    <div className="row mx-auto Nov-data my-4 " >

                        <div className="row ">
                            <div className='col-12 col-md-3 date'>
                                <h1>26 Nov'19</h1>
                                <p>09.00-10.00</p>

                            </div>
                            <div className='col-12 col-md-3 date'>
                               <p>Treatment</p>
                                <h4>Open Access</h4>

                            </div>
                            <div className='col-12 col-md-6'>
                                <div className="row">
                                    <div className='col-md-4'>
                                    <p>Dentist</p>
                                      <h5>Drg.Adam H.</h5>
                                    </div>
                                    <div className='col-md-4'>
                                    <p>Nurse</p>
                                      <h5>jessicamila</h5>
                                    </div>
                                    <div className='col-md-4'>
                                    <p>Dentist</p>
                                    <i class="fa-sharp fa-solid fa-list-ul"></i>
                                    <span style={{marginLeft:'12px'}}>Note</span>
                                    </div>
                                </div>
                            

                            </div>
                        </div>
                      

                    </div>
                    <div className="row mx-auto Nov-data my-4 " >

                        <div className="row ">
                            <div className='col-12 col-md-3 date'>
                                <h1>26 Nov'19</h1>
                                <p>09.00-10.00</p>

                            </div>
                            <div className='col-12 col-md-3 date'>
                               <p>Treatment</p>
                                <h4>Open Access</h4>

                            </div>
                            <div className='col-12 col-md-6'>
                                <div className="row">
                                    <div className='col-md-4'>
                                    <p>Dentist</p>
                                      <h5>Drg.Adam H.</h5>
                                    </div>
                                    <div className='col-md-4'>
                                    <p>Nurse</p>
                                      <h5>jessicamila</h5>
                                    </div>
                                    <div className='col-md-4'>
                                    <p>Dentist</p>
                                    <i class="fa-sharp fa-solid fa-list-ul"></i>
                                    <span style={{marginLeft:'12px'}}>Note</span>
                                    </div>
                                </div>
                            

                            </div>
                        </div>
                      

                    </div>
                </div>
            </section>

        </section>
      
    </div>
  )
}
export default Data;
