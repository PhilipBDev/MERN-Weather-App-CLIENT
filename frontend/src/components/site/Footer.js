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
  position: relative;
  margin-left: auto;
  margin-right: auto;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  font-weight: bold;
  width: 18rem;
  margin-top: 1.8rem;
`;

const FooterText = styled.p`
  font-weight: bold;
  color: #fff;
  background-color: rgba(43, 72, 110, 0.8);
  border-radius: 1rem;
  padding: 0.3rem;
`;

const FooterLink = styled.a`
  color: #3884ff;
  text-decoration: none;
  &:hover {
    color: grey;
  }
`;
