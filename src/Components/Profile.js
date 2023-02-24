import React from 'react'
import profile from"../profile.jpg";

function Profile() {
  return (
    <div>

         <section className="profile-section">

            <div className="profile">
                <img src={profile} alt="" />
                <h1>Daine Copper</h1>
                <span>daine.copper@emaple.com</span>

                <div className="data">
                    <div ><h3>15</h3><span>past</span></div>
                    <div className="partition"></div>
                  <div> <h3>02</h3><span>upcoming</span></div>
                </div>
                {/* ///////////////////////////////// */}



                <div >
                    <button>Send Message</button>
                </div>


                <h5>Files/ Document</h5>

                <div className="list">

                  <div>
                        <i class="fa-sharp fa-solid fa-list-ul"></i>
                        <span> Checkup Result.pdf</span>
                  </div>
                  <div>
                        <i class="fa-sharp fa-solid fa-list-ul"></i>
                        <span> Checkup Result.pdf</span>
                  </div>
                  <div>
                        <i class="fa-sharp fa-solid fa-list-ul"></i>
                        <span> Medical Prescription.pdf</span>
                  </div>
                  <div>
                        <i class="fa-sharp fa-solid fa-list-ul"></i>
                        <span> Dental X-Ray Result.pdf</span>
                  </div>
              


                </div>

            
            </div>


        </section>
      
    </div>
  )
}

export default Profile;
