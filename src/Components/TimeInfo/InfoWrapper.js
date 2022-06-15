import Time from './Time'
import Day from './Day'
import Month from './Month'
import DayOfMonth from './DayOfMonth'
import styled from 'styled-components'

const WrapperInfo = styled.div`
  margin-bottom: 50px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 5px;
  width: 100%;
  font-size: 21px;
`

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 15px;
`

const RedLetter = styled.div`
  margin-right: 10px;
  color: red;
`

const TimeFront = styled.div``

const TimeConvention = styled.div``

function InfoWrapper({ time, day, month, dayOfMonth }) {
  const timeFront = time.slice(0, 4)
  let redLetter = time.length === 8 ? `${time.slice(4, 5)}` : `${time.slice(3, 4)}`
  const timeConvention = time.slice(5, 8)

  return (
    <WrapperInfo>
      <Time>
        <TimeFront>{timeFront}</TimeFront>
        <RedLetter>{redLetter}</RedLetter>
        <TimeConvention>{timeConvention}</TimeConvention>
      </Time>

      <FlexContainer>
        <Day>{day}</Day>
        <Month>{month}</Month>
        <DayOfMonth>{dayOfMonth}</DayOfMonth>
      </FlexContainer>
    </WrapperInfo>
  )
}
export default InfoWrapper
