import { ChangeEvent, useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { STATUS, WeatherConditions } from '../../hooks/useFetch/types';
import { STATUS as USER_GEO_STATUS } from '../../hooks/useGeolocation/types';
import useGeolocation from '../../hooks/useGeolocation';
import CurrentWeather from '../CurrentWeather';
import ExtendedForecast from '../ExtendedForecast';
import Select from '../Select';
import { ViewsTypes } from './types';
import Spinner from '../Spinner';
import Alert from '../Alert';

const MainSection = () => {
  const [selectedCity, setSelectedCity] = useState<string>('');
  const userGeoAlertState = useState<boolean>(true);
  const weatherAlertState = useState<boolean>(true);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(e.target.value);
  };

  const { status, info } = useFetch(selectedCity);
  const userGeo = useGeolocation();

  useEffect(() => {
    if (userGeo.city) {
      setSelectedCity(userGeo.city);
    }
  }, [userGeo.city]);

  const DISPLAY_VIEWS: ViewsTypes = {
    INIT: <h2 className='main-section__title'>Por favor, seleccioná una cuidad.</h2>,
    LOADING: <Spinner />,
    ERROR: <Alert status='ERROR_WEATHER' alertState={weatherAlertState} />,
    SUCCESS: (
      <>
        <CurrentWeather address={info?.address} weather={info?.days[0]} />
        <ExtendedForecast days={info?.days?.slice(1) as WeatherConditions[]} />
      </>
    ),
  };

  const alertUser =
    userGeo.status === USER_GEO_STATUS.DENIED || userGeo.status === USER_GEO_STATUS.ERROR;

  return (
    <>
      {userGeo.status === USER_GEO_STATUS.LOADING && <Spinner />}
      {alertUser && (
        <Alert
          status={USER_GEO_STATUS.DENIED ? 'DENIED' : 'ERROR'}
          alertState={userGeoAlertState}
        />
      )}

      <main className='main-section'>
        <div
          className={`container ${status === STATUS.SUCCESS ? 'main-section--grid' : ''}`}
        >
          <Select handleChange={handleChange} value={selectedCity} />
          {DISPLAY_VIEWS[status]}
        </div>
      </main>
    </>
  );
};

export default MainSection;
