//===================
// Styled-Components
//===================

import styled from 'styled-components';

export const UserWrapper = styled.div`
  background-color: rgba(52, 99, 140, 0.8);
  border-radius: 1rem;
  box-shadow: 0 1.5px 0 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #555555;
  padding: 1rem;
  padding-bottom: 3rem;
  width: 20rem;
  margin: 0 auto;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InputStyle = styled.input`
  display: flex;
`;

export const FormTitle = styled.h1`
  font-weight: bold;
  font-size: 2.5rem;
  color: #fff;
  text-shadow: 2px 2px #000;
  margin-top: 1rem;
  margin-bottom: 1.2rem;
`;

export const FormHeader = styled.h3`
  font-weight: bold;
  font-size: 1rem;
  color: #fff;
  text-shadow: 2px 2px #000;
  margin-top: 1rem;
  margin-bottom: 0.3rem;
`;

export const FormBtn = styled.button`
  background-color: #fff;
  font-size: 1em;
  margin-top: 2em;
  margin-left: 3rem;
  padding: 0.25em 1em;
  border: 1px solid #000;
  border-radius: 0.5rem;
  &:hover {
    background-color: #808080;
  }
`;
