import React, { useState, useEffect } from 'react'
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

function InfoWrapper(props) {
  const [timeData, changeData] = useState(null)
  const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  useEffect(() => {
    fetch('http://worldtimeapi.org/api/timezone/Europe/Warsaw')
      .then(response => response.json())
      .then(data => {
        changeData(data)
      })
  }, [])

  return (
    <>
      {timeData && (
        <WrapperInfo>
          <Time
            time={
              timeData.utc_datetime[11] +
              timeData.utc_datetime[12] +
              timeData.utc_datetime[13] +
              timeData.utc_datetime[14] +
              timeData.utc_datetime[15]
            }
            mode={props.mode}
          />
          <FlexContainer>
            <Day day={weekDay[timeData.day_of_week]} mode={props.mode}></Day>
            <Month
              month={month[parseInt(timeData.utc_datetime[5] + timeData.utc_datetime[6], 10)]}
              mode={props.mode}
            ></Month>
            <DayOfMonth
              day={parseInt(timeData.utc_datetime[5] + timeData.utc_datetime[6], 10)}
              mode={props.mode}
            ></DayOfMonth>
          </FlexContainer>
        </WrapperInfo>
      )}
    </>
  )
}
export default InfoWrapper
