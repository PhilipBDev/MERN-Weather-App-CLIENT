import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import img from './public/images/background.jpg';

import CardList from './components/card/CardList';
import LocationForm from './components/site/LocationForm';
import CardContainer from './components/card/CardContainer';
import Login from './components/user/Login';
import Register from './components/user/Register';
import NavBar from './components/site/NavBar';
import Footer from './components/site/Footer';

const App = () => {
  return (
    <Router>
      <Background>
        <NavBar />
        <Route exact path="/" component={LocationForm} />
        <Route exact path="/" component={CardList} />
        {/* <Route path="/login" component={Login} />
        <Route path="/register" component={Register} /> */}
        <Footer />
      </Background>
    </Router>
  );
};

export default App;

//===================
// Styled-Components
//===================

const Background = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;
