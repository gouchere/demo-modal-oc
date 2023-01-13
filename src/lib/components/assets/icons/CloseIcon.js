import styled from "styled-components";
import { TypeScale } from "../../utils/typography";
import { ReactComponent as CloseIcon } from "./xmark-solid.svg";
import { ColourShemes } from "../../utils/themes";

export const StyledCloseIcon = styled(CloseIcon).attrs((props) => ({
  fill: props.closecolor || ColourShemes["green-300"],
  width: props.sizeclose || TypeScale.header4,
}))`
  fill: ${(props) => ColourShemes[props.closecolor]};
  width: ${(props) => TypeScale[props.sizeclose]};
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 20px;
`;

// & path {
// 	fill: ${({ color }) => color || "black"};
// }
