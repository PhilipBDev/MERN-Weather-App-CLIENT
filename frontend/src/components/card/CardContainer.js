// Layout/Edit/Delete

import styled from 'styled-components';

const CardContainer = ({ name, dt, icon, main, temp }) => {
  const date = new Date(dt);

  return (
    <Card>
      <CardText>
        <Close>X</Close>
        <SmallCardText>{date.toLocaleDateString()}</SmallCardText>
        <div>{name}</div>
        <div>
          <img
            id="icon"
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          ></img>
        </div>
        <div>{main}</div>
        <SmallCardText>{temp}°F</SmallCardText>
      </CardText>
    </Card>
  );
};

export default CardContainer;

//===================
// Styled-Components
//===================

const Card = styled.div`
  position: relative;
  padding: 1rem;
  border: 1px solid #fff;
  box-sizing: border-box;
  width: 10rem;
  height: 16rem;
  border-radius: 1rem;
  background-color: rgba(52, 99, 140, 0.8);
  transition: transform 0.5s ease;
  &:hover {
    transform: scale(1.2);
  }
  @media (max-height: 400px) {
    height: 13rem;
  }
`;

const Close = styled.div`
  position: absolute;
  top: 0.4rem;
  right: 0.5rem;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    transform: scale(1.5);
    color: #ff0000;
  }
`;

const SmallCardText = styled.div`
  font-size: 0.7rem;
`;

const CardText = styled.h1`
  font-weight: bold;
  color: #fff;
  font-size: 1.5rem;
  @media (max-height: 400px) {
    font-size: 1rem;
  }
`;
