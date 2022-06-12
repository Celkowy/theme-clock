import HourHand from './HourHand'
import MinuteHand from './MinutHand'
import SecondHand from './SecondHand'
import styled from 'styled-components'

const StyledFace = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: ${props => (props.mode ? 'black' : 'white')};
  position: relative;
  transition: all 0.6s cubic-bezier(0.99, 0, 0.52, 1);
`

function ClockFace(props) {
  return (
    <StyledFace mode={props.mode}>
      <SecondHand mode={props.mode} />
      <MinuteHand mode={props.mode} />
      <HourHand mode={props.mode} />
    </StyledFace>
  )
}
export default ClockFace
