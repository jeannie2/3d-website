import React from 'react'

function Footer () {
  return (
    <>
      <div class="container-fluid px-0">
      <footer class="bg-black d-flex justify-content-center py-3 fixed-bottom sticky-bottom">
        <ul class="nav text-white">
          <li className="nav-item"><a href="https://www.tesla.com/about" className="nav-link px-2 text-white">Tesla &copy; 2023</a></li>
          <li className="nav-item"><a href="https://www.tesla.com/legal" className="nav-link px-2 text-white">Privacy & Legal</a></li>
          <li className="nav-item"><a href="https://www.tesla.com/contact" className="nav-link px-2 text-white">Contact</a></li>
          <li className="nav-item"><a href="https://www.tesla.com/blog" className="nav-link px-2 text-white">News</a></li>
          {/* <li className="nav-item"><a href="https://www.tesla.com/updates" className="nav-link px-2 text-white">Get Updates</a></li> */}
          <li className="nav-item"><a href="https://www.tesla.com/findus/list" className="nav-link px-2 text-white">Locations</a></li>
        </ul>
      </footer>
      </div>
    </>
  )
}

export default Footer
