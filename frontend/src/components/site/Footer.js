import styled from 'styled-components';

const Footer = () => {
  return (
    <Foot>
      <FooterText>
        &copy; 2021{' '}
        <FooterLink href="https://github.com/PhilipBDev">PhilipBDev</FooterLink>{' '}
        Weather App
      </FooterText>
    </Foot>
  );
};

export default Footer;

//===================
// Styled-Components
//===================

const Foot = styled.footer`
  margin-top: 1rem;
  position: fixed;
  text-align: center;
  font-weight: bold;
  bottom: 0;
  left: 0;
  width: 100%;
  @media (max-width: 500px) {
    padding: 1rem 1.5rem;
  }
`;

const FooterText = styled.p`
  font-weight: bold;
  color: #fff;
`;

const FooterLink = styled.a`
  color: blue;
  text-decoration: none;
  &:hover {
    color: grey;
  }
`;
