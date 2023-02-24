import React from 'react'
import logo from "../logo.jpg"

 function Sidenavbar() {
  return (
    <div>

        

{/* Sidenavbar */}
<section className="nav-section">

<nav className='sidenav'>
    <div className='container-fluid'>
            <div className='logo'>
           <img src={logo} alt="" />
           <hr />
            </div>

            <div className="icons">
                
            <div>
            <i class="fa-solid fa-plus"></i><br />
            
                New
            </div>
            <div>
            <i class="fa-sharp fa-solid fa-bed"></i><br />
            
                PATIENT
            </div>

         <div>
         <i class="fa-solid fa-folder-open"></i><br />
         Folder

         </div>

         <div>
         <i class="fa-sharp fa-solid fa-upload"></i><br />
         Upload

         </div>
         <div>
         <i class="fa-solid fa-flag"></i><br />
         Report

         </div>
         <div>
         <i class="fa-solid fa-gear"></i><br />
         Setting
         

         </div>

         <div>
         <i class="fa-solid fa-right-from-bracket"></i><br />
         Logout
         

         </div>
            </div>


        


    </div>
  
</nav>





</section>
      
    </div>
  )
}

export default Sidenavbar;