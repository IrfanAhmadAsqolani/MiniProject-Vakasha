import React from 'react'

function InputSearch() {
  return (
    <>
        <div className='container mt-5 mb-5'>
            <div className='row text-center'>
                <h1><strong>Find Tourist Attractions</strong></h1>
            </div>
            <div className='row mt-4 d-flex justify-content-center'>
                <div className='col-md-6'>
                    <div className="input-group input-group-lg" id='input-email'>
                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" 
                        placeholder='Search Places Here...'/>
                    </div>
                </div>
                <div className='col-md-2 '>
                    <button type="button" class="btn btn-primary btn-lg" id='new-btn-primary' style={{ borderRadius: "30px", backgroundColor: "#142A49"}}>&emsp;&emsp;Search&emsp;&emsp;</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default InputSearch