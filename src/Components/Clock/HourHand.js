import styled from 'styled-components'

const HourHand = styled.div`
  width: 3px;
  height: 50px;
  background-color: ${props => (props.theme.mode ? 'black' : 'white')};
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 3;
  margin-left: -1.5px;
  border-radius: 5px;
  transform-origin: top center;
  transition: background-color 0.6s cubic-bezier(0.99, 0, 0.52, 1), transform 0s linear;
`

export default HourHand
