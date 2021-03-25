import styled from 'styled-components';

const Tooltip = () => {
  return (
    <ToolWrapper>
      <ToolBtn>
        <h3>?</h3>
      </ToolBtn>
      <ToolText>
        <p>
          Outside the US? Please enter the first part of your zip code and
          2-letter country code -- ex. EC1A,GB for London or 10115,DE for
          Berlin.
        </p>
      </ToolText>
    </ToolWrapper>
  );
};

export default Tooltip;

//===================
// Styled-Components
//===================

const ToolBtn = styled.div`
  background: #fff;
  color: #000;
  width: 2rem;
  text-align: center;
  border-radius: 1rem;
`;
const ToolText = styled.div`
  position: absolute;
  visibility: hidden;
  border-radius: 1rem;
`;
const ToolWrapper = styled.div`
  & ${ToolBtn}:hover + ${ToolText} {
    visibility: visible;
    color: #fff;
    background-color: rgba(52, 99, 140, 0.8);
    border: 1px solid #fff;
    width: 18rem;
    padding: 0.8rem;
    font-weight: bold;
  }
`;
