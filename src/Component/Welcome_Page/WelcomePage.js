import React from 'react'
import './WelcomePage.css';

function Header() {
  return (
    <> 
        <div className='Header'>
            <div className='row me-0'>
                <div className='col-auto mx-auto flex-column justify-content-center aligns-items-center' id='margin-teks'>
                    <h1 className='text-white text-center mb-3'><strong className='size-teks'>FIND BEAUTIFUL PLACES</strong></h1>
                    <h1 className='text-white text-center mb-3'><strong className='size-teks'>FOR YOUR TRIP</strong></h1>
                    <div className='d-flex justify-content-center'>
                        <a href="/">
                            <button className="btn mt-2" id="btn-discover" type="submit">
                                Discover More <i className="bi bi-chevron-right"></i>
                            </button>
                        </a>    
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header