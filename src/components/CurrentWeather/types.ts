import { WeatherInfo, WeatherConditions } from '../../hooks/useFetch/types';

export type CurrentWeatherProps = Pick<WeatherInfo, 'address'> &
  Record<'weather', WeatherConditions | undefined>;
