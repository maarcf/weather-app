interface WeatherInfo {
  address: string;
  days?: WeatherConditions[] | null;
}

interface WeatherConditions {
  datetime: string;
  tempmax: number;
  tempmin: number;
  temp: number;
  humidity: number;
  windspeed: number;
  conditions: string;
  description: string;
  icon: string;
}

export enum STATUS {
  INIT = 'INIT',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export interface FetchDataTypes {
  status: keyof typeof STATUS;
  info?: WeatherInfo;
}
