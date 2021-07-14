import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState, createContext } from 'react';

import GlobalStyle from './elements/GlobalStyle';
import styled from 'styled-components';

import CardList from './components/card/CardList';
import LocationForm from './components/site/LocationForm';
import Login from './components/user/Login';
import Register from './components/user/Register';
import NavBar from './components/site/NavBar';
import Footer from './components/site/Footer';
import Tooltip from './components/site/Tooltip';
import useFetch from './hooks/useFetch';
import { UserContextProvider } from './context/UserContext';
import Axios from 'axios';

Axios.defaults.withCredentials = true;

export const LinkContext = createContext();

const App = () => {
  const [url, setUrl] = useState();

  const { data, error, isLoading } = useFetch({ url });

  const getContent = () => {
    if (error) return <StyleApi>Error when fetching: {error}</StyleApi>;
    if (!data && isLoading) return <StyleApi>LOADING...</StyleApi>;
    if (!data) return null;
    return (
      <Route exact path="/">
        <CardList data={data} />
      </Route>
    );
  };

  return (
    <UserContextProvider>
      <LinkContext.Provider value={{ url, setUrl }}>
        <GlobalStyle />
        <Router>
          <NavBar />
          <Route exact path="/" component={Tooltip} />
          <Route exact path="/" component={LocationForm} />
          {getContent()}
          <Route exact path="/" component={Footer} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/register" component={Tooltip} />
        </Router>
      </LinkContext.Provider>
    </UserContextProvider>
  );
};

export default App;

//~~~~~~~~~~~~~~~~~~~
// Styled-Components
//~~~~~~~~~~~~~~~~~~~

const StyleApi = styled.h2`
  font-weight: bold;
  font-size: 2.5rem;
  color: #fff;
  text-shadow: 2px 2px #000;
  background-color: rgba(52, 99, 140, 0.2);
  text-align: center;
`;
