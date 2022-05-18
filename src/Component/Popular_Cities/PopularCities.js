import './PopularCities.css'
import React, { useState } from 'react'
import { gql, useQuery, useLazyQuery, useMutation, useSubscription } from "@apollo/client";

function PopularCities() {
  const GetPopularCities = gql`
      query MyQuery {
          Top_Cities {
              desc
              id
              img_url
              name
          }
      }
  `;

  // Buat Data Query
  const { data: dataTopCities, loading: loadingQuery } = useQuery(GetPopularCities);
  // cek dataTopCities
  console.info(dataTopCities);
  return (
    <>
      <div className='container my-5'>
          <div className='row'>
              <h1 className='mb-5'><strong>Popular Cities</strong></h1>
          </div>
          <div className='row row-cols-1 row-cols-md-4 row-cols-sm-3 row-cols-xs-2 row-cols-xl-4 g-3'>
            {dataTopCities?.Top_Cities.map((cities) => ( 
              <>
                <div className='col text-center'>
                  <a className='text-decoration-none' href= {`/DetailsCity/${cities.id}/${cities.name}`}>
                  <img className='img-items rounded-3' src={cities.img_url}  alt={cities.name}/>
                    <div className='px-4 text-center d-flex justify-content-center'>
                      <h5 className='color=text text-uppercase fw-bolder pt-2'>{cities.name}</h5>
                    </div>
                  </a>
                </div>
              </>
            ))}
          </div>
      </div>
    </>
  )
}

export default PopularCities