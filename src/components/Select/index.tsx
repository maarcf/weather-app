import { SelectProps } from './types';

const cities = ['Buenos Aires', 'New York', 'Madrid', 'Tokio', 'Medellín'];

const Select = ({ handleChange, value }: SelectProps) => {
  return (
    <form className='select-city'>
      <fieldset>
        <label htmlFor='city' aria-label='Seleccione una cuidad'>
          <select
            name='city'
            id='city'
            onChange={handleChange}
            aria-live='polite'
            value={value}
            className='select-city__select'
          >
            <option defaultValue='' hidden>
              Seleccione una cuidad
            </option>
            {cities.map(city => (
              <option value={city} key={city}>
                {city}
              </option>
            ))}
          </select>
        </label>
      </fieldset>
    </form>
  );
};

export default Select;
