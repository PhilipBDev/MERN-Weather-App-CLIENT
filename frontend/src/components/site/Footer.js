import styled from 'styled-components';

const Footer = () => {
  return (
    <Foot>
      <p>
        &copy; 2021 <a href="https://github.com/PhilipBDev">PhilipBDev</a>{' '}
        Weather App
      </p>
    </Foot>
  );
};

export default Footer;

//===================
// Styled-Components
//===================

const Foot = styled.footer`
  margin-top: 1rem;
  padding: 1rem;
  background-color: #009ad6;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  @media (max-width: 500px) {
    padding: 1rem 1.5rem;
  }
`;
