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

function InfoWrapper() {
  const [timeData, changeData] = useState(null)

  const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  const time = timeData && timeData.utc_datetime.slice(11, 16)
  const day = timeData && weekDay[timeData.day_of_week]
  const month = timeData && monthArr[parseInt(timeData.utc_datetime.slice(5, 7) - 1, 10)]
  const dayOfMonth = timeData && parseInt(timeData.utc_datetime.slice(5, 7), 10)

  useEffect(() => {
    fetch('https://worldtimeapi.org/api/timezone/Europe/Warsaw')
      .then(response => response.json())
      .then(data => {
        changeData(data)
      })
  }, [])

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
