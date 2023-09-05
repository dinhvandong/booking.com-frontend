/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Tour from './Tour';
import axios from 'axios';

const TourList = () => {

const url = "http://localhost:8080/api/booking/findAllBookingActive";
    
const [tours, setTours] = useState([]);
useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, {
            headers: {
              'Access-Control-Allow-Origin': 'http://localhost:3000',
              // Add other headers if needed
            }
          }); // Replace with your API endpoint
        setTours(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

//   const tours = [
//     {
//       id: 1,
//       name: 'Tour 1',
//       description: 'Description for Tour 1',
//       image: 'tour1.jpg',
//     },
//     {
//       id: 2,
//       name: 'Tour 2',
//       description: 'Description for Tour 2',
//       image: 'tour2.jpg',
//     },
//     {
//         id: 3,
//         name: 'Tour 3',
//         description: 'Description for Tour 3',
//         image: 'tour2.jpg',
//       },
//       {
//         id: 4,
//         name: 'Tour 4',
//         description: 'Description for Tour 4',
//         image: 'tour2.jpg',
//       },
//       {
//         id: 5,
//         name: 'Tour 5',
//         description: 'Description for Tour 5',
//         image: 'tour2.jpg',
//       },
//       {
//         id: 6,
//         name: 'Tour 6',
//         description: 'Description for Tour 6',
//         image: 'tour2.jpg',
//       },
//       {
//         id: 7,
//         name: 'Tour 7',
//         description: 'Description for Tour 7',
//         image: 'tour2.jpg',
//       },
//       {
//         id: 8,
//         name: 'Tour 8',
//         description: 'Description for Tour 8',
//         image: 'tour2.jpg',
//       },
//       {
//         id: 9,
//         name: 'Tour 9',
//         description: 'Description for Tour 9',
//         image: 'tour2.jpg',
//       },
//       {
//         id: 10,
//         name: 'Tour 10',
//         description: 'Description for Tour 10',
//         image: 'tour2.jpg',
//       },
//       {
//         id: 11,
//         name: 'Tour 11',
//         description: 'Description for Tour 11',
//         image: 'tour2.jpg',
//       },
//       {
//         id: 12,
//         name: 'Tour 12',
//         description: 'Description for Tour 12',
//         image: 'tour2.jpg',
//       },
//       {
//         id: 13,
//         name: 'Tour 13',
//         description: 'Description for Tour 13',
//         image: 'tour2.jpg',
//       },
//       {
//         id: 14,
//         name: 'Tour 14',
//         description: 'Description for Tour 14',
//         image: 'tour2.jpg',
//       },
//       {
//         id: 15,
//         name: 'Tour 15',
//         description: 'Description for Tour 15',
//         image: 'tour2.jpg',
//       },
//       {
//         id: 16,
//         name: 'Tour 16',
//         description: 'Description for Tour 16',
//         image: 'tour2.jpg',
//       },
//       {
//         id: 17,
//         name: 'Tour 17',
//         description: 'Description for Tour 17',
//         image: 'tour2.jpg',
//       },
//       {
//         id: 18,
//         name: 'Tour 18',
//         description: 'Description for Tour 18',
//         image: 'tour2.jpg',
//       },
//       {
//         id: 19,
//         name: 'Tour 19',
//         description: 'Description for Tour 19',
//         image: 'tour2.jpg',
//       },
//       {
//         id: 20,
//         name: 'Tour 20',
//         description: 'Description for Tour 20',
//         image: 'tour2.jpg',
//       },

//     // Add more tour objects as needed
//   ];

  return (
    <div>
      {tours.map((tour) => (
        <Tour key={tour.id} tour={tour} />
      ))}
    </div>
  );
};

export default TourList;