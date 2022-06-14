import styled from 'styled-components'

const SecondHand = styled.div`
  width: 3px;
  height: 90px;
  background-color: red;
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  border-radius: 5px;
  transform-origin: top center;
  transform: rotate(${({ seconds }) => (seconds * 360) / 60}deg);
  transition: transform 0s linear;
`

export default SecondHand
