import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const SubmittedPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 5000)
  // eslint-disable-next-line
  }, [])

  return (
    <>
      <div className='container text-center pt-5 mt-5 h-75'>
        <h1 className='mt-3 font-weight-bold text-white'>Thank You</h1>
        {/* <h6 className="text-white">Your order is confirmed. </h6> */}
        <img src="sideview.png" width="500px" height="auto" alt="sideshot"/>
        <h6 className="text-secondary">A representative will be in contact with you directly. </h6>
        <h6 className="text-secondary">You will be able to complete your Cybertruck configuration as production nears. </h6>
      </div>
    </>
  )
}

export default SubmittedPage
