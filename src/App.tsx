import Footer from './components/Footer';
import Header from './components/Header';
import useFetch from './hooks/useFetch';
import { STATUS } from './hooks/useFetch/types';

const App = () => {
  const { status, info } = useFetch('MENDOZA');

  return (
    <>
      <Header />
      {status === STATUS.INIT && <p>SELECCIONE UNA CUIDAD</p>}
      {status === STATUS.LOADING && <p>CARGANDO...</p>}
      {status === STATUS.SUCCESS && info?.address}
      {status === STATUS.ERROR && <p>HUBO UN ERROR</p>}
      <Footer />
    </>
  );
};

export default App;
