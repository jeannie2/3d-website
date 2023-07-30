import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function Footer () {

  return (
    <>
  <div className="container" id="footer">
  {/* <footer className="py-3 my-4 bg-dark fixed-bottom" > */}
   <footer className="bg-black fixed-bottom" >
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><a href="https://www.tesla.com/legal" className="nav-link px-2 text-body-secondary">Privacy & Legal</a></li>
      <li className="nav-item"><a href="https://www.tesla.com/contact" className="nav-link px-2 text-body-secondary">Contact</a></li>
      <li className="nav-item"><a href="https://www.tesla.com/blog" className="nav-link px-2 text-body-secondary">News</a></li>
      <li className="nav-item"><a href="https://www.tesla.com/updates" className="nav-link px-2 text-body-secondary">Get Updates</a></li>
      <li className="nav-item"><a href="https://www.tesla.com/findus/list" className="nav-link px-2 text-body-secondary">Locations</a></li>
    </ul>
    <p className="text-center text-white">Tesla &copy; 2023 </p>
     {/* <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>&copy; 2023 Company, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
<FontAwesomeIcon icon="fa-brands fa-twitter" style={{color: "white",}} />
      </ul>

    </div> */}


  </footer>
</div>
</>
  )
}

export default Footer

      // <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
      // <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Features</a></li>
      // <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Pricing</a></li>
      // <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
      // <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
