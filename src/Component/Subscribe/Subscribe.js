import React from 'react'

function Subscribe() {
  return (
    <>
        <div className='container mt-5 mb-5'> 
            <div className='row px-4 d-flex'>
                <div className='col-md-6 ps-4'>
                    <h4><strong>Subscribe for Exclusive Email-only Recomendations</strong></h4>
                    <h5>Exclusive access to more place recommendations</h5>
                </div>
                <div className='col-md-4'>
                    <div className="input-group input-group-lg" id='input-email'>
                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" 
                        placeholder='example@example.com'/>
                    </div>
                </div>
                <div className='col-md-2'>
                    <button type="button" class="btn btn-primary btn-lg" id='new-btn-primary' style={{ borderRadius: "8px", backgroundColor: "#142A49"}}>&emsp;Subscribe&emsp;</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Subscribe