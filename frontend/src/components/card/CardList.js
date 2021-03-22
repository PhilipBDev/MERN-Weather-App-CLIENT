// Displays list of weather cards

import styled from 'styled-components';
import CardContainer from './CardContainer';

const CardList = () => {
  return (
    <List>
      <CardContainer />
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
  justify-content: center;
  text-align: center;
  margin: 1rem;
  @media (max-height: 400px) {
    font-weight: bold;
    position: fixed;
    bottom: 10vh;
    width: 80vw;
  }
`;
