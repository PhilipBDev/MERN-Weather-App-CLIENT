import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = () => {
  return (
    <Nav>
      <Title>Weather App</Title>
      <Ul>
        <Li>
          <Link to="/">Home</Link>
        </Li>
        <Li>
          <Link to="/login">Login</Link>
        </Li>
        <Li>
          <Link to="/register">Register</Link>
        </Li>
      </Ul>
    </Nav>
  );
};

export default NavBar;

//===================
// Styled-Components
//===================

const Nav = styled.nav`
  padding: 0 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #009ad6;

  @media (max-width: 500px) {
    padding: 1rem 1.5rem;
  }
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 1.5rem;
`;

const Ul = styled.ul`
  padding: 0rem 0.6rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
`;

const Li = styled.li`
  padding: 0.3rem;
  margin: 0rem 0.2rem;
  font-size: 1rem;
  font-weight: 700;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
`;
