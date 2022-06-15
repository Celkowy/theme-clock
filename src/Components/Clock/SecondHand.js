import styled from 'styled-components'

const SecondHand = styled.div`
  width: 3px;
  height: 90px;
  background-color: red;
  position: absolute;
  z-index: 5;
  top: 50%;
  left: 50%;
  margin-left: -1.5px;
  border-radius: 5px;
  transform-origin: top center;
  transition: transform ${props => (props.changeAnimation ? '0s' : '1s')} linear;
`

export default SecondHand
