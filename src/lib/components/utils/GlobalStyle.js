import { createGlobalStyle } from "styled-components";
import { ColourShemes } from "./themes";
import { primaryFont } from "./typography";

const GlobalStyle = createGlobalStyle`

*, ::after, ::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
  body { 
    background: ${ColourShemes["green-500"]};
    font-family: ${primaryFont};
  }
`;

export default GlobalStyle;
