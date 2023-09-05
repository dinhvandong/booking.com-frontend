import React from 'react';

const Tour = ({ tour }) => {
  return (

    <div style={{ display:'inline-block',wordWrap:'break-word', padding:'10px', width:'250px', height:'250px', marginRight:'10px' }}>
      <img style={{ objectFit:'cover', width:'100%', height:'100%' }} src={tour.image} alt={tour.bookingName} />
      <h3 style={{ maxWidth:'100%', maxHeight:'60px', display:'-webkit-flex', overflow:'auto', maxLines:3, textOverflow:'ellipsis', wordWrap:'break-word' }} >{tour.bookingName}</h3>
      <p>{tour.price}</p>
    </div>
  );
};

export default Tour;