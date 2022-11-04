import useFetch from '../../hooks/useFetch';
import { STATUS } from '../../hooks/useFetch/types';
import CurrentWeather from '../CurrentWeather';

const MainSection = () => {
  const { status, info } = useFetch('New York');

  return (
    <main className='main-section'>
      <div className='container'>
        {status === STATUS.SUCCESS && (
          <CurrentWeather address={info?.address} weather={info?.days[0]} />
        )}

        {status === STATUS.INIT && <p>SELECCIONE UNA CUIDAD</p>}
        {status === STATUS.LOADING && <p>CARGANDO...</p>}
        {status === STATUS.ERROR && <p>HUBO UN ERROR</p>}
      </div>
    </main>
  );
};

export default MainSection;
