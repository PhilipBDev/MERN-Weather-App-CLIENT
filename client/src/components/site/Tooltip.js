import styled from 'styled-components';
import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

const Tooltip = () => {
  const { user } = useContext(UserContext);

  return (
    <ToolWrapper>
      {user === null ? (
        <>
          <ToolBtn>?</ToolBtn>
          <ToolText>
            <p>Register to have your city show up automatically!</p>
          </ToolText>
        </>
      ) : (
        user && ''
      )}
    </ToolWrapper>
  );
};

export default Tooltip;

//~~~~~~~~~~~~~~~~~~~
// Styled-Components
//~~~~~~~~~~~~~~~~~~~

const ToolBtn = styled.button`
  background: #fff;
  padding: 0;
  border: none;
  color: #000;
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  text-align: center;
  font-weight: bold;
  &:hover {
    background-color: #808080;
  }
`;
const ToolText = styled.div`
  position: absolute;
  right: 3vw;
  top: 5vh;
  visibility: hidden;
  border-radius: 1rem;
`;
const ToolWrapper = styled.div`
  position: absolute;
  right: 6vw;
  top: 3vh;
  & ${ToolBtn}:hover + ${ToolText} {
    visibility: visible;
    color: #fff;
    text-align: center;
    background-color: rgba(52, 99, 140, 0.8);
    border: 1px solid #fff;
    width: 18rem;
    padding: 0.8rem;
    font-weight: bold;
  }
`;
