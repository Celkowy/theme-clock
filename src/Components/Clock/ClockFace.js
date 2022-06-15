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

function ClockFace({ seconds, changeAnimation }) {
  return (
    <StyledFace>
      <SecondHand
        seconds={seconds}
        changeAnimation={changeAnimation}
        style={{ transform: `rotate(${(seconds * 360) / 60}deg)` }}
      />
      <MinuteHand seconds={seconds} style={{ transform: `rotate(${((seconds * 360) / 60 / 60) % 360}deg)` }} />
      <HourHand seconds={seconds} style={{ transform: `rotate(${((seconds * 360) / 12 / 60 / 60) % 360}deg)` }} />
      <Dot />
    </StyledFace>
  )
}

export default ClockFace
