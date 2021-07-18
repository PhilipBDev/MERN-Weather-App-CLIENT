import Axios from 'axios';
import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import UserContext from '../context/UserContext';
import domain from '../../util/domain';
import ErrorMessage from '../../util/ErrorMessage';
import { LinkContext } from '../../App';

import {
  UserWrapper,
  FormTitle,
  FormHeader,
  FormBtn,
  FormLink,
  InputStyle,
} from './StyleForm';

const WEATHER_URL = process.env.REACT_APP_WEATHER_URL;
const WEATHER_API = process.env.REACT_APP_WEATHER_API;

const Login = () => {
  const [formEmail, setFormEmail] = useState('');
  const [formPassword, setFormPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [city, setCity] = useState('');
  const { setUrl } = useContext(LinkContext);

  const { getUser } = useContext(UserContext);

  const history = useHistory();

  async function login(e) {
    e.preventDefault();

    const loginData = {
      email: formEmail,
      password: formPassword,
    };

    try {
      const userData = await Axios.post(`${domain}/auth/login`, loginData);
      setCity(userData.data);
    } catch (err) {
      if (err.response) {
        if (err.response.data.errorMessage) {
          setErrorMessage(err.response.data.errorMessage);
        }
      }
      return;
    }

    await getUser();

    history.push('/');
  }

  setUrl(
    `${WEATHER_URL}/weather?q=${city}&appid=${WEATHER_API}&units=imperial`
  );

  return (
    <UserWrapper>
      <FormTitle>Sign In</FormTitle>
      {errorMessage && (
        <ErrorMessage
          message={errorMessage}
          clear={() => setErrorMessage(null)}
        />
      )}
      <form onSubmit={login}>
        <FormHeader>Email: </FormHeader>
        <InputStyle
          placeholder="Email"
          type="email"
          value={formEmail}
          onChange={(e) => setFormEmail(e.target.value)}
        />
        <FormHeader>Password: </FormHeader>
        <InputStyle
          placeholder="Password"
          type="password"
          value={formPassword}
          onChange={(e) => setFormPassword(e.target.value)}
        />
        <FormBtn type="submit">Submit</FormBtn>
      </form>
      <FormLink>
        {' '}
        Don't have an account yet? <Link to="/register">Register here.</Link>
      </FormLink>
    </UserWrapper>
  );
};

export default Login;
