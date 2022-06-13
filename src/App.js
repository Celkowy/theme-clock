import ClockFace from './Components/Clock/ClockFace'
import SwitchButton from './Components/SwitchButton'
import Wrapper from './Wrapper'
import InfoWrapper from './Components/TimeInfo/InfoWrapper'
import React, { useState, useEffect } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => (props.theme.mode ? 'white' : 'black')};
    transition: all 0.6s cubic-bezier(.99,0,.52,1);
    font-family: 'Mulish', sans-serif;
  }
`

function App() {
  const [mode, switchMode] = useState(true)
  const [timeData, changeData] = useState(null)
  const [seconds, updateSeconds] = useState(timeData && timeData.getSeconds())
  const [minutes, updateMinutes] = useState(timeData && timeData.getMinutes())
  const [hours, updateHours] = useState(timeData && timeData.getHours())

  const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  function updateTime() {
    updateSeconds(prev => prev + 1)
    updateMinutes(prev => prev + 1)
    updateHours(prev => prev + 1)
  }

  useEffect(() => {
    const interval = setInterval(() => updateTime(), 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    fetch('https://worldtimeapi.org/api/timezone/Europe/Warsaw')
      .then(response => response.json())
      .then(data => {
        changeData(new Date(data.utc_datetime))
      })
  }, [])

  const time = timeData && timeData.getHours() + `:${timeData.getMinutes().toString().padStart(2, '0')}`
  const day = timeData && weekDay[timeData.getDay()]
  const month = timeData && monthArr[timeData.getMonth()]
  const dayOfMonth = timeData && timeData.getDate()

  const theme = {
    mode: mode,
  }

  function changeMode() {
    switchMode(!mode)
  }

  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <SwitchButton onClick={changeMode}>{mode ? 'Dark mode' : 'Light mode'}</SwitchButton>
        <ClockFace seconds={seconds} minutes={minutes} hours={hours} />
        <InfoWrapper time={time} day={day} month={month} dayOfMonth={dayOfMonth} timeData={timeData} />
      </ThemeProvider>
    </Wrapper>
  )
}

export default App
