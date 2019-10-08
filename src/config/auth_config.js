const config = () => {
  if (process.env.NODE_ENV === 'development') {
    return {
      clientID: 'SIPlp6RHA9CbeJ5SUTa0RUvQRKiK8XBp',
      domain: 'ajeshkumar.eu.auth0.com',
    };
  } else {
    return {
      clientID: '00dhbYRpFS2YqC3MaG638hBZi0iNH5b8',
      domain: 'excelplay-2019.auth0.com',
    };
  }
};

export default config;
