import { useState, useContext } from 'react';
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

  console.log(geolink);
  const { data, error, isLoading } = useFetch({ url });
  console.log(data.results[0].address_components[2].long_name);

  const watchID = (e) => {
    navigator.geolocation.watchPosition((position) => {
      let longitude = position.coords.longitude;
      let latitude = position.coords.latitude;
      let coordinates = latitude + ',' + longitude;
      setGeolink(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinates}&key=${GEOKEY}`
      );
    });
  };

  console.log();
  //   console.log(data.results[0].address_components[2].long_name);

  const fetchGeo = () => {
    watchID();
    setCity(data.data.results[0].address_components[2].long_name);
    setUrl(
      `${WEATHER_URL}/weather?q=${city}&appid=${WEATHER_API}&units=imperial`
    );
  };

  //   const getContent = (e) => {
  // if (error) return <StyleApi>Error when fetching: error</StyleApi>;
  // if (!data && isLoading) return <StyleApi>LOADING...</StyleApi>;
  // if (!data) return null;

  // console.log('hello');

  // return watchID();
  //   };

  return <GeolocationBtn type="submit" onClick={watchID}></GeolocationBtn>;
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

const StyleApi = styled.h2`
  font-weight: bold;
  font-size: 2.5rem;
  color: #fff;
  text-shadow: 2px 2px #000;
  background-color: rgba(52, 99, 140, 0.2);
  text-align: center;
`;
