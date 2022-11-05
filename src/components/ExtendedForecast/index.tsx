import { WeatherConditions } from '../../hooks/useFetch/types';
import { formatDay, NO_INFO } from '../../utils/helpers';
import Icon from '../Icon';
import { ExtendedForecastProps } from './types';

const ListItem = ({
  datetimeEpoch,
  tempmax,
  tempmin,
  description,
  icon,
}: WeatherConditions) => {
  const className = 'extended-forecast__info';
  const { weekday, dayMonth } = formatDay(datetimeEpoch);

  return (
    <li className={className}>
      <div className={`${className}__date`}>
        <p>{weekday}</p>
        <p>{dayMonth}</p>
      </div>
      <p className={`${className}__temp`}>
        <span>{`${tempmax ? Math.round(tempmax) + '°' : NO_INFO}`}</span> /
        <span>{`${tempmin ? Math.round(tempmin) + '°' : NO_INFO}`}</span>
      </p>
      {Boolean(icon) && (
        <div className={`${className}__icon-container`}>
          <Icon icon={icon} description={description} />
        </div>
      )}
    </li>
  );
};

const ExtendedForecast = ({ days }: ExtendedForecastProps) => {
  return (
    <aside className='extended-forecast'>
      <h2 className='extended-forecast__title'>Próximos días</h2>
      <div>
        <ul className='extended-forecast__container-info'>
          {days.map((nextDay, i) => {
            return <ListItem key={i} {...nextDay} />;
          })}
        </ul>
      </div>
    </aside>
  );
};

export default ExtendedForecast;
