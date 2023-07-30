import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function Footer () {

  return (
    <>
  <div class="container">
  <footer class="bg-black d-flex justify-content-center py-3 px-3 border-top fixed-bottom small">
    {/* <p class="mb-0 text-white"></p> */}
    {/* <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
    </a> */}
    <ul class="nav text-white">
      <li className="nav-item"><a href="https://www.tesla.com/about" className="nav-link px-2 text-white">Tesla &copy; 2023</a></li>
      <li className="nav-item"><a href="https://www.tesla.com/legal" className="nav-link px-2 text-white">Privacy & Legal</a></li>
      <li className="nav-item"><a href="https://www.tesla.com/contact" className="nav-link px-2 text-white">Contact</a></li>
      <li className="nav-item"><a href="https://www.tesla.com/blog" className="nav-link px-2 text-white">News</a></li>
      {/* <li className="nav-item"><a href="https://www.tesla.com/updates" className="nav-link px-2 text-white">Get Updates</a></li> */}
      <li className="nav-item"><a href="https://www.tesla.com/findus/list" className="nav-link px-2 text-white">Locations</a></li>
      {/* <li class="nav-item"><a href="/" className="nav-link px-2 text-muted">Home</a></li>
      <li class="nav-item"><a href="/" className="nav-link px-2 text-muted">Features</a></li>
      <li class="nav-item"><a href="/" className="nav-link px-2 text-muted">Pricing</a></li>
      <li class="nav-item"><a href="/" className="nav-link px-2 text-muted">FAQs</a></li>
      <li class="nav-item"><a href="/" className="nav-link px-2 text-muted">About</a></li> */}
    </ul>
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
