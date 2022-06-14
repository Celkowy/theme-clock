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

  const [actualTime, setActualTime] = useState(new Date())

  const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  useEffect(() => {
    const interval = setInterval(() => {
      setActualTime(new Date())
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  const time =
    (new Date().getHours() === 12 ? 12 : `${(new Date().getHours() % 12).toString().padStart(2, '0')}`) +
    `:${new Date().getMinutes().toString().padStart(2, '0')}` +
    (new Date().getHours() > 12 ? ' PM' : ' AM')
  const day = weekDay[new Date().getDay()]
  const month = monthArr[new Date().getMonth()]
  const dayOfMonth = new Date().getDate()

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
        <InfoWrapper time={time} day={day} month={month} dayOfMonth={dayOfMonth} />
        <ClockFace seconds={actualTime.getSeconds() + actualTime.getMinutes() * 60 + actualTime.getHours() * 60 * 60} />
        <SwitchButton onClick={changeMode}>{mode ? 'Dark mode' : 'Light mode'}</SwitchButton>
      </ThemeProvider>
    </Wrapper>
  )
}

export default App
