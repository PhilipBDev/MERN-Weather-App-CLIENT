// Displays list of weather cards

import styled from 'styled-components';
import CardContainer from './CardContainer';
import { useContext } from 'react';
import useFetch from '../../hooks/useFetch';
import { LinkContext } from '../../App';

const CardList = () => {
  const url = useContext(LinkContext);

  const { value, isLoading, error, requestData } = useFetch({ url });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>[error]</p>;
  console.log(error);

  return (
    <List>
      <CardContainer
        name={value.name}
        icon={value.weather[0].icon}
        currentWeather={value.weather[0].main}
        temp={value.main.temp}
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
