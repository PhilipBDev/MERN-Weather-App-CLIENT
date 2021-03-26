// Register to automatically show your weather!

import styled from 'styled-components';
import UserWrapper from './UserWrapper';
import InputStyle from './InputStyle';

const Register = () => {
  return (
    <UserWrapper>
      <form>
        <InputStyle
          placeholder="First name"
          type="text"
          name="firstName"
          required
        />
        <InputStyle
          placeholder="Last name"
          type="text"
          name="lastName"
          required
        />
        <InputStyle placeholder="Email" type="email" name="email" required />
        <InputStyle
          placeholder="Password"
          type="password"
          name="password"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </UserWrapper>
  );
};

export default Register;

//===================
// Styled-Components
//===================
