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
  FormLink,
  FormBtn,
  InputStyle,
} from './StyleForm';

const WEATHER_URL = process.env.REACT_APP_WEATHER_URL;
const WEATHER_API = process.env.REACT_APP_WEATHER_API;

const Register = () => {
  const [formCity, setFormCity] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPassword, setFormPassword] = useState('');
  const [formPasswordVerify, setFormPasswordVerify] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const { setUrl } = useContext(LinkContext);

  const { getUser } = useContext(UserContext);

  const history = useHistory();

  async function register(e) {
    e.preventDefault();

    const registerData = {
      city: formCity,
      email: formEmail,
      password: formPassword,
      passwordVerify: formPasswordVerify,
    };

    try {
      await Axios.post(`${domain}/auth/`, registerData);
      setUrl(
        `${WEATHER_URL}/weather?q=${formCity}&appid=${WEATHER_API}&units=imperial`
      );
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

  return (
    <UserWrapper>
      <FormTitle>Sign Up</FormTitle>
      {errorMessage && (
        <ErrorMessage
          message={errorMessage}
          clear={() => setErrorMessage(null)}
        />
      )}
      <form onSubmit={register}>
        <FormHeader>City: </FormHeader>
        <InputStyle
          placeholder="City"
          type="text"
          value={formCity}
          onChange={(e) => setFormCity(e.target.value)}
        />
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
        <FormHeader>Verify Password: </FormHeader>
        <InputStyle
          placeholder="Verify Password"
          type="password"
          value={formPasswordVerify}
          onChange={(e) => setFormPasswordVerify(e.target.value)}
        />
        <FormBtn type="submit">Submit</FormBtn>
      </form>
      <FormLink>
        Already have an account? <Link to="/login">Login instead</Link>
      </FormLink>
    </UserWrapper>
  );
};

export default Register;
