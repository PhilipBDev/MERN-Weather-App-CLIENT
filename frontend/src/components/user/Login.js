// Card needs to appear with user location after they log in

import styled from 'styled-components';
import UserWrapper from './UserWrapper';
import InputStyle from './InputStyle';

const Login = () => {
  return (
    <UserWrapper>
      <form>
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

export default Login;

//===================
// Styled-Components
//===================
