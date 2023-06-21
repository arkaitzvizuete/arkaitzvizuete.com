import SquareDotMatrix from "./Square-Dot-Matrix.ttf"

import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    @font-face {
        font-family: 'SquareDotMatrix';
        src: local('Square Dot Matrix'), local('Square-Dot-Matrix'), url(${SquareDotMatrix}) format('truetype');
    }
`
