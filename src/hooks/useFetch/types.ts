export interface WeatherInfo {
  address?: string;
  days: WeatherConditions[];
}

export interface WeatherConditions {
  datetimeEpoch: number;
  tempmax: number;
  tempmin: number;
  temp: number;
  humidity: number;
  windspeed: number;
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
