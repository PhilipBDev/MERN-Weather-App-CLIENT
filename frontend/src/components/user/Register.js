// Register to automatically show your weather!

import styled from 'styled-components';
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
      <FormTitle>Sign Up Form</FormTitle>
      <form>
        <FormHeader>First Name: </FormHeader>
        <InputStyle
          placeholder="First Name"
          type="text"
          name="firstName"
          required
        />
        <FormHeader>Postal Code: </FormHeader>
        <InputStyle
          placeholder="Postal Code"
          type="text"
          name="postalCode"
          required
        />
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
