// Displays list of weather cards

import styled from 'styled-components';
import CardContainer from './CardContainer';

const CardList = () => {
  return (
    <List>
      <CardContainer
        dt={1602104400 * 1000}
        name="Hickory"
        icon="01d"
        main="Clear"
        temp="22.67"
      />
      <CardContainer
        dt={1602104400 * 1000}
        name="Hickory"
        icon="01d"
        main="Clear"
        temp="22.67"
      />
      <CardContainer
        dt={1602104400 * 1000}
        name="Hickory"
        icon="01d"
        main="Clear"
        temp="22.67"
      />
      <CardContainer
        dt={1602104400 * 1000}
        name="Hickory"
        icon="01d"
        main="Clear"
        temp="22.67"
      />
      <CardContainer
        dt={1602104400 * 1000}
        name="Hickory"
        icon="01d"
        main="Clear"
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
  @media (max-height: 400px) {
    font-weight: bold;
    position: fixed;
    bottom: 10vh;
    width: 80vw;
  }
`;
