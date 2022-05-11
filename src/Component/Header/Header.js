import React from 'react'
import './Header.css';

function Header() {
  return (
    <> 
        <div className='Header'>
            <div className='row'>
                <div className='col-auto mx-auto mt-5 flex-column aligns-items-center'>
                    <h1 className='text-white text-center'><strong>FIND BEAUTIFUL PLACES</strong></h1>
                    <h1 className='text-white text-center'><strong>FOR YOUR TRIP</strong></h1>
                    <div className='d-flex justify-content-center'>
                        <a href="/">
                            <button className="btn mt-2" id="btn-discover" type="submit">
                                Discover More <i class="bi bi-chevron-right"></i>
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