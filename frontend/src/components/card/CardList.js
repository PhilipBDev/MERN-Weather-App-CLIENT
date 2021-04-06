// Displays list of weather cards

import styled from 'styled-components';
import CardContainer from './CardContainer';

import useFetch from '../../hooks/useFetch';
const WEATHER_URL = process.env.REACT_APP_WEATHER_URL;
const WEATHER_API = process.env.REACT_APP_WEATHER_API;

const CardList = () => {
  const weatherData = useFetch(
    `${WEATHER_URL}/weather?q=Charlotte&appid=${WEATHER_API}`
  );

  console.log(weatherData);

  return (
    <List>
      <CardContainer
        dt={1602104400 * 1000}
        name="Hickory"
        icon="01d"
        currentWeather="City"
        temp="22.67"
      />
      <CardContainer
        dt={1602104400 * 1000}
        name="Hickory"
        icon="01d"
        currentWeather="Clear"
        temp="22.67"
      />
      <CardContainer
        dt={1602104400 * 1000}
        name="Hickory"
        icon="01d"
        currentWeather="Clear"
        temp="22.67"
      />
      <CardContainer
        dt={1602104400 * 1000}
        name="Hickory"
        icon="01d"
        currentWeather="Clear"
        temp="22.67"
      />
      <CardContainer
        dt={1602104400 * 1000}
        name="Hickory"
        icon="01d"
        currentWeather="Clear"
        temp="22.67"
      />
    </List>
  );
};

export default CardList;

//===================
// Styled-Components
//===================

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  text-align: center;
  margin: 1rem;
`;
