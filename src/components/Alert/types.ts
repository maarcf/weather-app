import { Dispatch, SetStateAction } from 'react';

export interface AlertProps {
  status: 'DENIED' | 'ERROR' | 'ERROR_WEATHER';
  alertState: [boolean, Dispatch<SetStateAction<boolean>>];
}

export interface MessageToDisplayTypes {
  DENIED: string;
  ERROR: string;
  ERROR_WEATHER: string;
}
