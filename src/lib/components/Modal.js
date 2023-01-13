import React from "react";
import styled from "styled-components";
import { keyframes, css } from "styled-components";
import { StyledCloseIcon, StyledCircleIcon } from "../components/assets";
import { ColourShemes } from "./utils/themes";

let animation = keyframes`
0% {
    
	transform: translateX(-100%);
	  opacity: 0;
	}
	100% {
	  
	transform: translate(-50%, -50%);
	opacity: 1;
	}
`;

const ModalContainer = styled.div`
  height: 100%;
  width: 100vh;
`;
const ModalOverlay = styled.div.attrs((props) => ({
  overlayColor: props.overlayColor,
}))`
  background: ${(props) =>
    ColourShemes[props.overlayColor] || ColourShemes["neutral-500"]};
  height: 100vh;
  width: 100%;
  position: fixed;
  opacity: 0.5;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  transition: opacity 0.2s ease-out;
  z-index: 1;
`;

const ModalBody = styled.div.attrs((props) => ({
  bodyColor: props.bodyColor,
  animationBody: props.animationBody,
}))`
  background: ${(props) =>
    ColourShemes[props.bodyColor] || ColourShemes["neutral-100"]};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  max-width: 50%;
  min-width: 300px;
  min-height: 300px;
  border-radius: 8px;
  z-index: 10;
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);

  ${({ animationBody }) =>
    animationBody &&
    css`
      animation: ${animation} 500ms ease-out both;
    `}
`;

const ModalContent = styled.div`
  width: 100%;
  min-height: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 40px 20px 20px;
`;
const ModalTitle = styled.h2`
  font-family: sans-serif;
  width: 90%;
  text-align: center;
  margin: 0;
  padding: 10px;
`;
const ModalText = styled.p`
  font-family: sans-serif;
  font-size: 1.125rem;
  color: rgb(0, 0, 0);
  text-align: center;
  width: 90%;
  margin: 12px 0;
  padding: 9px;
`;

const ModalButton = styled.button.attrs((props) => ({
  buttonbg: props.buttonbg,
  buttonTextColor: props.buttonTextColor,
  buttonbgHover: props.buttonbgHover,
}))`
  display: block;
  font-size: 1rem;
  font-family: sans-serif;
  padding: 10px 12px;
  border-radius: 5px;
  background: ${(props) =>
    ColourShemes[props.buttonbg] || ColourShemes["green-300"]};
  color: ${(props) =>
    ColourShemes[props.buttonTextColor] || ColourShemes["neutral-1000"]};
  border: none;
  outline: none;
  cursor: pointer;

  &&:hover {
    background: ${(props) =>
      ColourShemes[props.buttonbgHover] || ColourShemes["green-200"]};
  }
`;

export const Modal = (props) => {
  const {
    setIsOpen,
    bodyColor, //body color base is neutral-100
    overlayColor, //overlay color base is neural-500
    modalTitle, // modal title base is "Employee created"
    modalText, // modal text base is "If you want, you can create more !"
    button, // button base is green-300 with dark text and hover green-200
    buttonText, // button text base is "Close"
    buttonbg,
    buttonbgHover,
    buttonTextColor,
    close, //close icon color base is green-300
    closecolor,
    sizeclose,
    check, //check icon color base is green-300 and size "iconLarge"
    checkcolor,
    sizecheck,
    animationBody, // translate X and Y animation
  } = props;

  return (
    <>
      <ModalContainer className="modalContainer">
        <ModalBody
          className="modalBody"
          bodyColor={bodyColor}
          animationBody={animationBody}
        >
          {close && (
            <StyledCloseIcon
              closecolor={closecolor}
              sizeclose={sizeclose}
              onClick={() => setIsOpen(false)}
            />
          )}

          <ModalContent className="modalContent">
            {check && (
              <StyledCircleIcon sizecheck={sizecheck} checkcolor={checkcolor} />
            )}

            <ModalTitle className="modalTitle">
              {modalTitle || "Employee created"}
            </ModalTitle>

            <ModalText className="modalText">
              {modalText || "If you want, you can create more !"}
            </ModalText>
            {button && (
              <ModalButton
                onClick={() => setIsOpen(false)}
                className="modalButton"
                buttonbg={buttonbg}
                buttonbgHover={buttonbgHover}
                buttonTextColor={buttonTextColor}
              >
                {buttonText || "Close"}
              </ModalButton>
            )}
          </ModalContent>
        </ModalBody>
        <ModalOverlay
          className="modalOverlay"
          onClick={() => setIsOpen(false)}
          overlayColor={overlayColor}
        ></ModalOverlay>
      </ModalContainer>
    </>
  );
};
