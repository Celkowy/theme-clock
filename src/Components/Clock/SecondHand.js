import styled from 'styled-components'

const SecondHand = styled.div`
  width: 3px;
  height: 90px;
  background-color: red;
  position: absolute;
  z-index: 5;
  top: 50%;
  left: 50%;
  border-radius: 5px;
  transform-origin: top center;
  transform: rotate(${({ seconds }) => ((seconds * 360) / 60) % 360}deg);

  transition: transform ${props => (props.changeAnimation ? '0s' : '1s')} linear;
`

export default SecondHand
