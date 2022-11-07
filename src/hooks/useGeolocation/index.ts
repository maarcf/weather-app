import { useEffect, useState } from 'react';
import { REVERSE_GEO_API_KEY, REVERSE_GEO_BASE_URL } from '../../utils/helpers';
import { Coords, STATUS, UserGeolocationTypes } from './types';

const useGeolocation = (): UserGeolocationTypes => {
  const [coords, setCoords] = useState<Coords>({ lat: 0, lon: 0 });
  const [info, setInfo] = useState<UserGeolocationTypes>({
    city: '',
    status: STATUS.INIT,
  });

  const getCityName = async (coords: Coords) => {
    setInfo({ ...info, status: STATUS.LOADING });
    try {
      const response = await fetch(
        `${REVERSE_GEO_BASE_URL}?key=${REVERSE_GEO_API_KEY}&pretty=1&language=es&no_annotations=1&q=${coords.lat}+${coords.lon}`
      );
      const data = await response.json();
      setInfo({ city: data.results[0].components.city, status: STATUS.SUCCESS });
    } catch (err) {
      console.error(err);
      setInfo({ ...info, status: STATUS.ERROR });
    }
  };

  const onSuccess = (position: GeolocationPosition) => {
    setCoords({
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    });
    getCityName(coords);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(onSuccess, () =>
        setInfo({ ...info, status: STATUS.DENIED })
      );
    }
  }, [coords.lat, coords.lon]);

  return info;
};

export default useGeolocation;
