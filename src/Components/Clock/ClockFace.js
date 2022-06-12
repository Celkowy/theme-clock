import HourHand from './HourHand'
import MinuteHand from './MinutHand'
import SecondHand from './SecondHand'
import styled from 'styled-components'

const StyledFace = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: ${props => (props.theme.mode ? 'black' : 'white')};
  position: relative;
  transition: all 0.6s cubic-bezier(0.99, 0, 0.52, 1);
`

function ClockFace() {
  return (
    <StyledFace>
      <SecondHand />
      <MinuteHand />
      <HourHand />
    </StyledFace>
  )
}

export default ClockFace
