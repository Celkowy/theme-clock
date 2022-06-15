import Time from './Time'
import Day from './Day'
import Month from './Month'
import DayOfMonth from './DayOfMonth'
import styled from 'styled-components'

const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  margin-left: 20px;

  margin-right: 20px;
  border-radius: 5px;
  width: 100%;
  font-size: 21px;
`

const FlexContainer = styled.div`
  display: flex;
  width: 225px;
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

const MinutesBeggining = styled.div``

function InfoWrapper({ minutes, hours, timeConvention, day, month, dayOfMonth }) {
  const redLetter = minutes.slice(minutes.length - 1, minutes.length)
  const minutesBeggining = minutes.slice(0, minutes.length - 1)

  return (
    <WrapperInfo>
      <Time>
        <TimeFront>{hours}</TimeFront>
        <MinutesBeggining>{minutesBeggining}</MinutesBeggining>
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
