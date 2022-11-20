import {useState, useEffect} from 'react';
import axios from 'axios';

const baseURL = 'https://f478-84-209-59-19.eu.ngrok.io';

export const useApi = path => {
  const [data, setData] = useState();
  const getData = async () => {
    try {
      const response = await axios.get(baseURL + path);
      const responseData = await response.data;
      //   console.log('responseDATA', responseData);
      setData(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData(path);
  }, [path]);

  return {data, getData};
};
