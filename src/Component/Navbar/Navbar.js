import React from 'react'
import './Navbar.css';

function Navbar() {
  return (
    <>
        <header className='header'>
            <div className='container'>
                <nav className="navbar navbar-expand-lg navbar-dark w-100">
                    <a className="navbar-brand" href="/"><strong>VAKASHA</strong></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-end navbar-menu" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/Find">FIND</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/About">ABOUT US</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/">LOGIN</a>
                            </li>
                            <li className="nav-item btn-signup">
                                <a href="/"><button className="btn" id="btn-signup" type="submit">SIGN UP</button></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    </>
  )
}

export default Navbar