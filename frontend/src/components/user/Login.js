// Card needs to appear with user location after they log in

import {
  UserWrapper,
  FormTitle,
  FormHeader,
  FormBtn,
  InputStyle,
} from './StyleForm';

const Login = () => {
  return (
    <UserWrapper>
      <FormTitle>Sign In</FormTitle>
      <form>
        <FormHeader>Email: </FormHeader>
        <InputStyle placeholder="Email" type="email" name="email" required />
        <FormHeader>Password: </FormHeader>
        <InputStyle
          placeholder="Password"
          type="password"
          name="password"
          required
        />
        <FormBtn type="submit">Submit</FormBtn>
      </form>
    </UserWrapper>
  );
};

export default Login;
