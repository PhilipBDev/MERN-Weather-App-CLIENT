import { BrowserRouter as Router, Route } from 'react-router-dom';

import GlobalStyle from './elements/GlobalStyle';
import styled from 'styled-components';

import CardList from './components/card/CardList';
import LocationForm from './components/site/LocationForm';
import CardContainer from './components/card/CardContainer';
import Login from './components/user/Login';
import Register from './components/user/Register';
import NavBar from './components/site/NavBar';
import Footer from './components/site/Footer';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <NavBar />
        <Route exact path="/" component={LocationForm} />
        <Route exact path="/" component={CardList} />
        <Route exact path="/" component={Footer} />
        {/* <Route path="/login" component={Login} />
        <Route path="/register" component={Register} /> */}
      </Router>
    </>
  );
};

export default App;
