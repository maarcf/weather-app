import { ChangeEvent, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { STATUS, WeatherConditions } from '../../hooks/useFetch/types';
import CurrentWeather from '../CurrentWeather';
import ExtendedForecast from '../ExtendedForecast';
import Select from '../Select';

const MainSection = () => {
  const [selectedCity, setSelectedCity] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(e.target.value);
  };

  const { status, info } = useFetch(selectedCity);

  return (
    <main className='main-section'>
      <div
        className={`container ${status === STATUS.SUCCESS ? 'main-section--grid' : ''}`}
      >
        <Select handleChange={handleChange} value={selectedCity} />
        {status === STATUS.SUCCESS && (
          <>
            <CurrentWeather address={info?.address} weather={info?.days[0]} />
            <ExtendedForecast days={info?.days?.slice(1) as WeatherConditions[]} />
          </>
        )}

        {status === STATUS.INIT && <p>SELECCIONE UNA CUIDAD</p>}
        {status === STATUS.LOADING && <p>CARGANDO...</p>}
        {status === STATUS.ERROR && <p>HUBO UN ERROR</p>}
      </div>
    </main>
  );
};

export default MainSection;
