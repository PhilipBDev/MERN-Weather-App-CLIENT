import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Axios from 'axios';
import { useContext } from 'react';
import UserContext from '../context/UserContext';
import domain from '../../util/domain';

const NavBar = () => {
  const { user, getUser } = useContext(UserContext);

  async function logOut() {
    await Axios.get(`${domain}/auth/logOut`);
    await getUser();
    window.location.reload();
  }

  return (
    <Nav>
      <Ul>
        {user === null ? (
          <>
            <Li>
              <NavLink to="/">Home</NavLink>
            </Li>
            <Li>
              <NavLink to="/login">Login</NavLink>
            </Li>
            <Li>
              <NavLink to="/register">Register</NavLink>
            </Li>
          </>
        ) : (
          user && (
            <Li>
              <NavLink to="/" onClick={logOut}>
                Log out
              </NavLink>
            </Li>
          )
        )}
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
