import {useState, useEffect, useCallback} from 'react';
import axios from 'axios';

const baseURL = 'https://6230-84-209-59-19.eu.ngrok.io'; // when ngrok used

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
