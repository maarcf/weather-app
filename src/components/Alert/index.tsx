import { AlertProps, MessageToDisplayTypes } from './types';

const Alert = ({ status, alertState }: AlertProps) => {
  const [open, setOpen] = alertState;

  const MESSAGE_TO_DISPLAY: MessageToDisplayTypes = {
    DENIED:
      'El acceso a la ubicación fue denegado. Recordá que podés cambiar tus preferencias desde la configuración de tu navegador.',
    ERROR:
      'Hubo un error al acceder a tu ubicación. Reintentá nuevamente en unos minutos, mientras podés usar el selector para ver el clima de otras cuidades.',
    ERROR_WEATHER:
      'Hubo un error al acceder a la información del clima. Por favor, intentá nuevamente más tarde.',
  };

  return (
    <>
      {open ? (
        <div className='alert'>
          <div className='alert__container'>
            <p>{MESSAGE_TO_DISPLAY[status]}</p>
            <button className='alert__button' onClick={() => setOpen(false)}>
              Aceptar
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Alert;
