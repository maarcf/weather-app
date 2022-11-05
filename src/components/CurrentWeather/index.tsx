import { WeatherConditions } from '../../hooks/useFetch/types';
import { formatToday, NO_INFO } from '../../utils/helpers';
import Icon from '../Icon';
import { CurrentWeatherProps } from './types';

const CurrentWeather = ({ address, weather }: CurrentWeatherProps) => {
  const {
    temp,
    datetimeEpoch,
    tempmax,
    tempmin,
    humidity,
    windspeed,
    description,
    icon,
  } = weather as WeatherConditions;
  const className = 'current-weather';
  const date = formatToday(datetimeEpoch);

  return (
    <article className={className}>
      <div className={`${className}__main-info`}>
        {Boolean(temp) && (
          <h2 className={`${className}__main-info__temp`}>
            {Math.round(temp)}
            <span>°C</span>
          </h2>
        )}
        <div className={`${className}__main-info__address`}>
          <h2>{address}</h2>
          <span>{date}</span>
        </div>
      </div>
      <div className={`${className}__more-info`}>
        <div>
          <div className={`${className}__more-info__temp`}>
            <p>
              Máx: <span>{`${tempmax ? Math.round(tempmax) + '°' : NO_INFO}`}</span>
            </p>
            <p>
              Mín: <span>{`${tempmin ? Math.round(tempmin) + '°' : NO_INFO}`}</span>
            </p>
          </div>
          <div className={`${className}__more-info__conditions`}>
            <p>
              Humedad: <span>{`${humidity ? Math.round(humidity) + '%' : NO_INFO}`}</span>
            </p>
            <p>
              Viento:{' '}
              <span>{`${windspeed ? Math.round(windspeed) + ' km/h' : NO_INFO}`}</span>
            </p>
            {description && <p>{description}</p>}
          </div>
        </div>
        {Boolean(icon) && (
          <div className={`${className}__more-info__icon-container`}>
            <Icon icon={icon} description={description} currentDay />
          </div>
        )}
      </div>
    </article>
  );
};

export default CurrentWeather;
