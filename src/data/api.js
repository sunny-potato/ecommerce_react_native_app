import {useState, useEffect, useCallback} from 'react';
import axios from 'axios';

// const baseURL = 'https://4e79-195-139-121-78.eu.ngrok.io';

const baseURL = 'http://192.168.50.208:3000'; //(IPv4 Address:3000)
export const useApi = path => {
  const [data, setData] = useState();

  const getData = useCallback(async () => {
    try {
      const response = await axios.get(baseURL + path);
      const responseData = await response.data;
      setData(responseData);
    } catch (error) {
      console.error('error : ', error);
    }
  }, [path]);

  useEffect(() => {
    getData(path);
  }, [getData, path]);

  return {data, getData};
};
