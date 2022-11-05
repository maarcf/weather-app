import { ChangeEventHandler } from 'react';

export interface SelectProps {
  handleChange: ChangeEventHandler<HTMLSelectElement>;
  value: string;
}
