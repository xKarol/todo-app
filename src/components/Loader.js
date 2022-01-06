import styled, { keyframes } from "styled-components";

export default function Loader(props) {
  return <Loading {...props} />;
}

const spin = keyframes`
  0% {transform: rotate(0deg);}
  100% {transform: rotate(360deg);}
`;

const Loading = styled.div`
  border-radius: 50%;
  width: 24px;
  height: 24px;
  border: 0.25rem solid rgba(255, 255, 255, 0.2);
  border-top-color: rgb(255, 255, 255);
  animation: ${spin} 1s infinite linear;
  pointer-events: none;
`;
