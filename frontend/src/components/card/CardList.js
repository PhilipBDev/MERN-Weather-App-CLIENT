// Displays list of weather cards

import styled from 'styled-components';
import CardContainer from './CardContainer';
import { useState } from 'react';
import useFetch from '../../hooks/useFetch';

const WEATHER_URL = process.env.REACT_APP_WEATHER_URL;
const WEATHER_API = process.env.REACT_APP_WEATHER_API;

const url = `${WEATHER_URL}/weather?q=West+Palm+Beach&appid=${WEATHER_API}&units=imperial`;

const CardList = () => {
  const [delay, setDelay] = useState(3000);
  const { value, isLoading, error } = useFetch({ url });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  console.log(value);

  return (
    <List>
      <CardContainer
        dt={value.dt * 1000}
        name={value.name}
        icon={value.weather[0].icon}
        currentWeather={value.weather[0].main}
        temp={value.main.temp}
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
