import { selectIcon } from '../../utils/helpers';
import { IconTypes } from './types';

const Icon = ({ icon, description, currentDay = false }: IconTypes) => {
  let IMG_SRC = `/assets/images/icons/${selectIcon(icon)}`;
  IMG_SRC += `${currentDay ? '.png' : '-gradient.png'}`;

  return (
    <img
      src={IMG_SRC}
      alt={`${description ? 'Pronóstico: ' + description : 'Ícono del tiempo.'}`}
    />
  );
};

export default Icon;
