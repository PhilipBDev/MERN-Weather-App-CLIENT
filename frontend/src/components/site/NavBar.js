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

//~~~~~~~~~~~~~~~~~~~
// Styled-Components
//~~~~~~~~~~~~~~~~~~~

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  @media (max-width: 500px) {
    padding: 1rem 1.5rem;
  }
`;

const Ul = styled.ul`
  padding: 0rem 0.6rem;
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  background-color: rgba(43, 72, 110, 0.7);
  border-radius: 1rem;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    color: #808080;
  }
`;

const Li = styled.li`
  padding: 0.3rem;
  margin: 0rem 0.2rem;
  font-size: 18px;
  font-weight: 700;
  text-shadow: 1px 1px #000;
  user-select: none;
`;
