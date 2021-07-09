// Register to automatically show your weather!

import {
  UserWrapper,
  FormTitle,
  FormHeader,
  FormBtn,
  InputStyle,
} from './StyleForm';

const Register = () => {
  return (
    <UserWrapper>
      <FormTitle>Sign Up</FormTitle>
      <form>
        <FormHeader>First Name: </FormHeader>
        <InputStyle
          placeholder="First Name"
          type="text"
          name="firstName"
          required
        />
        <FormHeader>City: </FormHeader>
        <InputStyle placeholder="City" type="text" name="city" required />
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

export default Register;
