import HourHand from './HourHand'
import MinuteHand from './MinutHand'
import SecondHand from './SecondHand'
import Dot from './Dot'
import styled from 'styled-components'

const StyledFace = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: relative;
  transform: rotate(180deg);
  box-shadow: 0px 0px 24px 0px rgba(66, 68, 90, 1);
  transition: all 0.6s cubic-bezier(0.99, 0, 0.52, 1);
`

function ClockFace({ seconds }) {
  return (
    <StyledFace>
      <SecondHand seconds={seconds} />
      <MinuteHand seconds={seconds} />
      <HourHand seconds={seconds} />
      <Dot />
    </StyledFace>
  )
}

export default ClockFace
