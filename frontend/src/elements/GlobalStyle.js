import { createGlobalStyle } from 'styled-components';
import img from '../images/background.jpg';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}

body, html {
    margin: 0;
    padding: 0;
    background-image: url(${img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
}
`;

export default GlobalStyle;
