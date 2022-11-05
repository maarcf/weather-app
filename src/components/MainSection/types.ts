import { STATUS } from '../../hooks/useFetch/types';

export type ViewsTypes = {
  [Property in keyof typeof STATUS]: JSX.Element;
};
