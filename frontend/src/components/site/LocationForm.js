// Insert ZIP or city. Geolocation.
// Location, Image, Temp

import styled from 'styled-components';

const LocationForm = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form>
      <Title>Weather App</Title>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="location"
          placeholder="Type zip code or city here.."
        />
      </form>
    </Form>
  );
};

export default LocationForm;

//===================
// Styled-Components
//===================

const Title = styled.h1`
  font-weight: bold;
  font-size: 2rem;
  color: #fff;
  text-shadow: 2px 2px #000;
  margin-top: 2rem;
`;

const Form = styled.div`
  margin-top: 1rem;
  text-align: center;
  font-weight: bold;
  width: 100%;
  @media (max-width: 500px) {
    padding: 1rem 1.5rem;
  }
`;
