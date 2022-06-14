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

function InfoWrapper({ time, day, month, dayOfMonth }) {
  return (
    <WrapperInfo>
      <Time>{time}</Time>
      <FlexContainer>
        <Day>{day}</Day>
        <Month>{month}</Month>
        <DayOfMonth>{dayOfMonth}</DayOfMonth>
      </FlexContainer>
    </WrapperInfo>
  )
}
export default InfoWrapper
