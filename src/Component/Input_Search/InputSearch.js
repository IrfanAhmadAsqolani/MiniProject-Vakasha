import './inputSearch.css'
import React, { useState } from 'react'
import { gql, useQuery, useLazyQuery, useMutation, useSubscription } from "@apollo/client";

function InputSearch() {
    const GetAllDataPlaces = gql`
        query MyQuery {
            Places(limit: 12) {
            id
            name
            city
            province
            category
            desc
            img_url
            like
            }
        }
    `;
    const SearchDataPlaces = gql`
        query MyQuery($nama: String) {
            Places(where: {name: {_eq: $nama}}) {
            id
            name
            desc
            category
            city
            province
            img_url
            like
            }
        }
    `;
    
    // Buat Data Query
    const { data: dataAllPlaces, loading: loadingQuery } = useQuery(GetAllDataPlaces);
    // cek dataAllPlaces
    console.info(dataAllPlaces);

    // Buat Lazy Query Nama Places
    const [ namaPlaces, setNamaPlaces] = useState("");
    const [ statusSearch, setStatusSearch] = useState(false);
    const [ GetDataPlaces, { data: dataPlacesSearch, loading: loadingPlaces }] = useLazyQuery(SearchDataPlaces);
    
    // cek dataLazyQuery
    const onChangeSearch = (e) => {
        setNamaPlaces(e.target.value);
        console.info(namaPlaces);
    };
    const onClickSearch = () => {
        GetDataPlaces({ variables: { nama: namaPlaces } });
        setStatusSearch(true);
        console.info("data search",dataPlacesSearch);
    };

    return (
        <>
            <div className='container mt-5 mb-5'>
                <div className='row text-center'>
                    <h1><strong>Find Tourist Attractions</strong></h1>
                </div>
                <div className='row mt-4 d-flex justify-content-center'>
                    <div className='col-md-6 pe-0'>
                        <div className="input-group input-group-lg" id='input-email'>
                            <input type="text" className="form-control" id="size-input" aria-label="Sizing example input" onChange={onChangeSearch} 
                            aria-describedby="inputGroup-sizing-lg" placeholder='Search Places Here...'/>
                        </div>
                    </div>
                    <div className='col-md-2 ps-1'>
                        <button type="button" className="btn btn-lg" id='new-btn-primary' onClick={onClickSearch}>&emsp;&emsp;Search&emsp;&emsp;</button>
                    </div>
                </div>
                <div className='container mt-3'>
                    {statusSearch ?
                        <div className="row row-cols-1 row-cols-md-4 g-4 mt-0 ms-1">
                            {dataPlacesSearch?.Places.map((searchPlaces) => ( 
                                <>
                                    <div className="col d-flex justify-content-center">
                                        <div className="card">
                                        <img src={searchPlaces.img_url} className="card-img-top" id='size-foto' alt={searchPlaces.name} />
                                        <div className="card-body">
                                            <div className='d-flex justify-content-between'>
                                                <h5 className="card-title fw-bold mb-3">{searchPlaces.name}</h5>
                                                <div className='d-flex ps-2'>
                                                    <i className="bi bi-heart-fill" id='icon-like'></i>
                                                    <p className='fs-6 ps-2'>{searchPlaces.like}</p>
                                                </div>
                                            </div>
                                            <div className='text-center'>
                                                <a href={`/DetailsPlaces/${searchPlaces.id}/${searchPlaces.category}`} className="btn text-center" id='btn-details'>See Details</a>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </div> 
                    :
                        <div className="row row-cols-1 row-cols-md-4 g-4 mt-0 ms-1">
                            {dataAllPlaces?.Places.map((places) => ( 
                                <>
                                    <div className="col d-flex justify-content-center">
                                        <div className="card">
                                        <img src={places.img_url} className="card-img-top" id='size-foto' alt={places.name} />
                                        <div className="card-body">
                                            <div className='d-flex justify-content-between'>
                                                <h5 className="card-title fw-bold mb-3">{places.name}</h5>
                                                <div className='d-flex ps-2'>
                                                    <i className="bi bi-heart-fill" id='icon-like'></i>
                                                    <p className='fs-6 ps-2'>{places.like}</p>
                                                </div>
                                            </div>
                                            <div className='text-center'>
                                            <a href={`/DetailsPlaces/${places.id}/${places.category}`} className="btn text-center" id='btn-details'>See Details</a>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default InputSearch