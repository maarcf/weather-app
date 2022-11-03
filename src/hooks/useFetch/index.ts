import { useEffect, useState } from 'react';
import { API_KEY, BASE_URL, QUERY_PARAMS } from '../../utils/helpers';
import { FetchDataTypes, STATUS } from './types';

const initialStateValues = {
  status: STATUS.INIT,
  weather: undefined,
};

const useFetch = (location: string): FetchDataTypes => {
  const [fetchData, setFetchData] = useState<FetchDataTypes>(initialStateValues);

  const getData = async () => {
    setFetchData({ ...fetchData, status: STATUS.LOADING });

    try {
      const response = await fetch(
        `${BASE_URL}/${location}/next5days?key=${API_KEY}&${QUERY_PARAMS}`
      );
      const data = await response.json();
      setFetchData({
        status: STATUS.SUCCESS,
        info: {
          address: data.address,
          days: data.days,
        },
      });
    } catch (err) {
      console.error(err);
      setFetchData({ ...fetchData, status: STATUS.ERROR });
    }
  };

  useEffect(() => {
    if (!location) return setFetchData(initialStateValues);
    getData();
  }, [location]);

  return fetchData;
};

export default useFetch;
