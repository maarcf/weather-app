const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__weather-info'>
          <p>
            La información es consumida de{' '}
            <a
              className='footer__weather-info__link'
              href='https://www.visualcrossing.com/'
              target='_blank'
              rel='noreferrer'
            >
              Visual Crossing.
            </a>{' '}
            Los íconos son propiedad de{' '}
            <a
              className='footer__weather-info__link'
              href='https://www.flaticon.com/authors/iconixar'
              target='_blank'
              rel='noreferrer'
            >
              iconixar
            </a>{' '}
            para{' '}
            <a
              className='footer__weather-info__link'
              href='https://www.flaticon.com/'
              target='_blank'
              rel='noreferrer'
            >
              Flaticon
            </a>
          </p>
        </div>
        <div className='footer__personal-info'>
          <p>
            Diseño y desarrollo por{' '}
            <a
              className='footer__personal-info__link'
              href='https://www.linkedin.com/in/mariana-cairo/'
              target='_blank'
              rel='noreferrer'
            >
              Mariana
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
