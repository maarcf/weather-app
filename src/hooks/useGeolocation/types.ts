export interface Coords {
  lat: number;
  lon: number;
}

export enum STATUS {
  INIT = 'INIT',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  DENIED = 'DENIED',
}

export interface UserGeolocationTypes {
  city: string;
  status: keyof typeof STATUS;
}
