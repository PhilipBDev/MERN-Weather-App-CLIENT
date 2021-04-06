// Insert ZIP or city. Geolocation.
// Location, Image, Temp

import styled from 'styled-components';
import { Location } from '@styled-icons/ionicons-sharp/Location';

const LocationForm = () => {
  const onSubmit = (e) => {
    // e.preventDefault();
  };

  return (
    <Container>
      <Form>
        <Title>Postal Code Weather</Title>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="location"
            placeholder="Type zip code or city here.."
          />
        </form>
      </Form>
      <Geolocation></Geolocation>
      <Btn type="submit">Submit</Btn>
    </Container>
  );
};

export default LocationForm;

//===================
// Styled-Components
//===================

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  text-align: center;
`;

const Title = styled.h1`
  width: 30%;
  border-radius: 1rem;
  display: inline-block;
  font-weight: bold;
  font-size: 2.5rem;
  color: #fff;
  text-shadow: 2px 2px #000;
  background-color: rgba(52, 99, 140, 0.2);
  margin-top: 1rem;
  margin-bottom: 1.5rem;
`;

const Form = styled.div`
  margin-top: 2.5rem;
  margin-bottom: 0.5rem;
  text-align: center;
  font-weight: bold;
  width: 100%;
`;

const Btn = styled.button`
  background-color: #fff;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 1px solid #000;
  border-radius: 0.5rem;
  &:hover {
    background-color: #808080;
  }
`;

const Geolocation = styled(Location)`
  width: 2.5rem;
  height: 2.5rem;
  margin-top: 0.6rem;
  color: #fff;
  stroke: #000;
  stroke-width: 1rem;
  &:hover {
    color: #808080;
  }
`;
