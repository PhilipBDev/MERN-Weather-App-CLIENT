// Insert ZIP or city. Geolocation.
// Location, Image, Temp

import styled from 'styled-components';

const LocationForm = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
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
  @media (max-height: 400px) {
    position: fixed;
    left: 50%;
    bottom: 50%;
    transform: translate(-50%, 0);
  }
`;

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
`;
