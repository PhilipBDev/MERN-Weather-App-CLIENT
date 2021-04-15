import { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { LinkContext } from '../../App';
import { Location } from '@styled-icons/ionicons-sharp/Location';
import useFetch from '../../hooks/useFetch';

const WEATHER_URL = process.env.REACT_APP_WEATHER_URL;
const WEATHER_API = process.env.REACT_APP_WEATHER_API;
const GEOKEY = process.env.REACT_APP_GEOKEY;

const Geolocation = () => {
  const [geolink, setGeolink] = useState();
  const { setUrl } = useContext(LinkContext);
  const [city, setCity] = useState('');

  const url = geolink;

  const { data } = useFetch({ url });

  const fetchGeo = (e) => {
    navigator.geolocation.watchPosition((position) => {
      let longitude = position.coords.longitude;
      let latitude = position.coords.latitude;
      let coordinates = latitude + ',' + longitude;
      setGeolink(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinates}&key=${GEOKEY}`
      );
    });
  };

  fetchGeo();

  const getContent = (e) => {
    // console.log(data.results[0].address_components[2].long_name);
    setCity(data.results[0].address_components[2].long_name);
  };

  useEffect(() => {
    if (city) {
      setUrl(
        `${WEATHER_URL}/weather?q=${city}&appid=${WEATHER_API}&units=imperial`
      );
      setCity('');
    }
  }, [city, setUrl]);

  return (
    <>
      <GeolocationBtn type="submit" onClick={getContent}></GeolocationBtn>
    </>
  );
};

export default Geolocation;

//~~~~~~~~~~~~~~~~~~~
// Styled-Components
//~~~~~~~~~~~~~~~~~~~

const GeolocationBtn = styled(Location)`
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
