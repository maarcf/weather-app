import { ChangeEvent, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { STATUS, WeatherConditions } from '../../hooks/useFetch/types';
import CurrentWeather from '../CurrentWeather';
import ExtendedForecast from '../ExtendedForecast';
import Select from '../Select';
import { ViewsTypes } from './types';

const MainSection = () => {
  const [selectedCity, setSelectedCity] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(e.target.value);
  };

  const { status, info } = useFetch(selectedCity);

  const DISPLAY_VIEWS: ViewsTypes = {
    INIT: <h2 className='main-section__title'>Por favor, seleccioná una cuidad.</h2>,
    LOADING: <h2 className='main-section__title'>Cargando información...</h2>,
    ERROR: (
      <h2 className='main-section__title'>
        Estamos teniendo problemas para mostrar la información. Reintentá en unos minutos.
      </h2>
    ),
    SUCCESS: (
      <>
        <CurrentWeather address={info?.address} weather={info?.days[0]} />
        <ExtendedForecast days={info?.days?.slice(1) as WeatherConditions[]} />
      </>
    ),
  };

  return (
    <main className='main-section'>
      <div
        className={`container ${status === STATUS.SUCCESS ? 'main-section--grid' : ''}`}
      >
        <Select handleChange={handleChange} value={selectedCity} />
        {DISPLAY_VIEWS[status]}
      </div>
    </main>
  );
};

export default MainSection;
