import styled, { keyframes } from 'styled-components'

const slide = keyframes`
 from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const HourHand = styled.div`
  width: 2px;
  height: 30px;
  background-color: ${props => (props.theme.mode ? 'white' : 'black')};
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 5px;
  transform-origin: 0 0;
  transform: translate(-50%, -50%);
  animation: ${slide} 86s infinite linear;
  transition: all 0.6s cubic-bezier(0.99, 0, 0.52, 1);
`

export default HourHand
