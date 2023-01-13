import styled from "styled-components";
import { TypeScale } from "../../utils/typography";
import { ColourShemes } from "../../utils/themes";
import { ReactComponent as CircleIcon } from "./circle.svg";

export const StyledCircleIcon = styled(CircleIcon).attrs((props) => ({
  fill: props.checkcolor || ColourShemes["green-300"],
  width: props.sizecheck || TypeScale.iconLarge,
}))`
  fill: ${(props) => ColourShemes[props.checkcolor]};
  width: ${(props) => TypeScale[props.sizecheck]};
`;

// height: ${(props) => TypeScale[props.sizecheck]};
// 	width: ${(props) => TypeScale[props.sizecheck]};
