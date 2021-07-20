export default process.env.NODE_ENV === 'development'
  ? 'https://city-weather-app-1.herokuapp.com'
  : process.env.NODE_ENV === 'production' &&
    'https://city-weather-app-1.herokuapp.com';
