import styled, { keyframes } from 'styled-components'

const slide = keyframes`
 from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const SecondHand = styled.div`
  width: 2px;
  height: 90px;
  background-color: red;
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  border-radius: 5px;
  transform-origin: 0 0;
  transform: translate(-50%, -50%);
  animation: ${slide} 6s infinite linear;
  transition: all 0.8s cubic-bezier(0.99, 0, 0.52, 1);

  &::after {
    content: '';
    position: absolute;
    height: 4px;
    width: 4px;
    background-color: ${props => (props.mode ? 'black' : 'white')};
    border-radius: 50%;
    border: 2px solid ${props => (props.mode ? 'red' : 'black')};
    transform: translate(-50%, -50%);
    transition: all 0.8s cubic-bezier(0.99, 0, 0.52, 1);
  }
`

export default SecondHand
