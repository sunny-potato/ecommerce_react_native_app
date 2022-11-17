import {useState, useEffect} from 'react';
import axios from 'axios';

const baseURL = 'https://54c6-2001-700-302-11-00-139.eu.ngrok.io';

// export const useApi = path => {
//   const [data, setData] = useState();

//   const getData = async () => {
//     try {
//       const response = await axios.get(baseURL + path);
//       const responseData = await response.data;
//       console.log(responseData);
//       setData(responseData);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, [path]);

//   return {data, getData};
// };
