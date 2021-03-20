import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = () => {
  return (
    <Nav>
      <Ul>
        <Li>
          <NavLink to="/">Home</NavLink>
        </Li>
        <Li>
          <NavLink to="/login">Login</NavLink>
        </Li>
        <Li>
          <NavLink to="/register">Register</NavLink>
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
  align-items: flex-end;
  @media (max-width: 500px) {
    padding: 1rem 1.5rem;
  }
`;

const Ul = styled.ul`
  padding: 0rem 0.6rem;
  display: inline;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  margin-left: auto;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    color: grey;
  }
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
