// Displays list of weather cards

import styled from 'styled-components';
import CardContainer from './CardContainer';

const CardList = (data) => {
  // console.log(data);

  return (
    <List>
      <CardContainer
        country={data.data.sys.country}
        name={data.data.name}
        icon={data.data.weather[0].icon}
        currentWeather={data.data.weather[0].main}
        temp={data.data.main.temp}
      />
    </List>
  );
};

export default CardList;

//~~~~~~~~~~~~~~~~~~~
// Styled-Components
//~~~~~~~~~~~~~~~~~~~

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  text-align: center;
  margin: 1rem;
`;
