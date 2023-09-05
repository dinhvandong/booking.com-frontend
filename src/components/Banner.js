import React from 'react'
import TourList from './banner/TourList'

export const Banner = () => {
  return (
    <div style={{ display:'flex', flexDirection:'column',
     width:'100%',overflowX:'scroll', whiteSpace:'nowrap',
    
    // overflow-x: scroll;
    // white-space: nowrap;
    backgroundColor:'white' }}>

    <TourList/>
    <TourList/>
    <TourList/>
    </div>
  )
}
