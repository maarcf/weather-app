// Weather
export const API_KEY: string = import.meta.env.VITE_API_KEY;
export const BASE_URL: string = import.meta.env.VITE_BASE_URL_SERVICES;
export const QUERY_PARAMS =
  'unitGroup=metric&lang=es&include=days&elements=description,humidity,icon,temp,tempmax,tempmin,windspeed,datetimeEpoch&timezone=America/Argentina/Buenos_Aires';

// Reverse Geo
export const REVERSE_GEO_API_KEY: string = import.meta.env.VITE_REVERSE_GEO_API_KEY;
export const REVERSE_GEO_BASE_URL: string = import.meta.env.VITE_REVERSE_GEO_BASE_URL;

export const NO_INFO = '';

export const formatToday = (datetime: number): string => {
  const dateToMilliseconds = datetime * 1000;

  return new Date(dateToMilliseconds).toLocaleDateString('es-AR', {
    day: 'numeric',
    month: 'long',
  });
};

export const formatDay = (datetime: number) => {
  const dateToMilliseconds = datetime * 1000;
  const date = new Date(dateToMilliseconds)
    .toLocaleDateString(undefined, {
      day: '2-digit',
      month: '2-digit',
      weekday: 'short',
    })
    .split(',');

  const weekday = date[0].toUpperCase();
  const dayMonth = date[1].replace(' ', '');

  return { weekday, dayMonth };
};

export const selectIcon = (icon: string): string => {
  const ICONS_TO_CHOOSE = [
    'clear',
    'cloudy',
    'fog',
    'partly-cloudy',
    'rain',
    'snow',
    'wind',
  ];

  if (icon === 'partly-cloudy-day' || icon === 'partly-cloudy-night') {
    return 'partly-cloudy';
  } else if (icon === 'clear-night' || icon === 'clear-day') {
    return 'clear';
  } else if (ICONS_TO_CHOOSE.includes(icon)) {
    return icon;
  }

  return 'cloudy';
};
