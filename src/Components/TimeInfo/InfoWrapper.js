import Time from './Time'
import Day from './Day'
import Month from './Month'
import DayOfMonth from './DayOfMonth'
import styled from 'styled-components'

const WrapperInfo = styled.div`
  margin-top: 50px;
  border-radius: 5px;
  width: 100%;
  padding: 15px 20px;
  font-size: 21px;
`

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 10px;
`

function InfoWrapper({ time, day, month, dayOfMonth, timeData }) {
  return (
    <>
      {timeData && (
        <WrapperInfo>
          <Time>{time}</Time>
          <FlexContainer>
            <Day>{day}</Day>
            <Month>{month}</Month>
            <DayOfMonth>{dayOfMonth}</DayOfMonth>
          </FlexContainer>
        </WrapperInfo>
      )}
    </>
  )
}
export default InfoWrapper
