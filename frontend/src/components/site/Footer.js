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
  display: flex;
  justify-content: center;
  font-weight: bold;
  margin-top: 1.5rem;
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
