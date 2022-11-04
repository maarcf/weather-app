import useFetch from '../../hooks/useFetch';
import { STATUS, WeatherConditions } from '../../hooks/useFetch/types';
import CurrentWeather from '../CurrentWeather';
import ExtendedForecast from '../ExtendedForecast';

const MainSection = () => {
  const { status, info } = useFetch('New York');

  return (
    <main className='main-section'>
      <div
        className={`container ${status === STATUS.SUCCESS ? 'main-section--flex' : ''}`}
      >
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
