import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState, createContext } from 'react';

import GlobalStyle from './elements/GlobalStyle';

import CardList from './components/card/CardList';
import LocationForm from './components/site/LocationForm';
import Login from './components/user/Login';
import Register from './components/user/Register';
import NavBar from './components/site/NavBar';
import Footer from './components/site/Footer';
import Tooltip from './components/site/Tooltip';
import useFetch from './hooks/useFetch';

export const LinkContext = createContext();

const App = () => {
  const [url, setUrl] = useState();

  const { data, error, isLoading } = useFetch({ url });
  // console.log(url);
  // console.log(data);

  const getContent = () => {
    if (error) return <h2>Error when fetching: {error}</h2>;
    if (!data && isLoading) return <h2>LOADING...</h2>;
    if (!data) return null;
    return (
      <Route exact path="/">
        <CardList data={data} />
      </Route>
    );
  };

  return (
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
  );
};

export default App;
