import ClockFace from './Components/Clock/ClockFace'
import SwitchButton from './Components/SwitchButton'
import Wrapper from './Wrapper'
import InfoWrapper from './Components/TimeInfo/InfoWrapper'
import React, { useState, useEffect } from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const GlobalStyle = createGlobalStyle`

  body {
    background-color: ${props => (props.theme.mode ? 'white' : 'black')};
    transition: all 0.6s cubic-bezier(.99,0,.52,1);
    font-family: 'Mulish', sans-serif;
  }
`

const ArrowDownContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size 24px;
  color: ${props => (props.theme.mode ? 'black' : 'white')};
  transition: color 0.6s cubic-bezier(.99,0,.52,1);
  margin-top: 25px;
  @media (max-width: 640px) {
    margin-top: 40px;
  }
`

const SettingsContainer = styled.div`
  margin-top: 25px;
  height: 75px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

const NeedleMode = styled.button`
  border: none;
  background-color: ${props => (props.theme.mode ? 'black' : 'white')};
  color: ${props => (props.theme.mode ? 'white' : 'black')};
  font-size: 14px;
  transition: background-color 0.6s cubic-bezier(0.99, 0, 0.52, 1), color 0.6s cubic-bezier(0.99, 0, 0.52, 1);
  padding: 10px 15px;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 15px;

  &:active {
    transform: scale(0.98);
  }
`

const ArrowDown = styled(FontAwesomeIcon)`
  transform: ${props => (props.$settings ? 'rotate(-180deg)' : null)};
  transition transform .4s ease;  
`

const SettingsText = styled.div`
  color: ${props => (props.theme.mode ? 'black' : 'white')};
  transition: color 0.6s cubic-bezier(0.99, 0, 0.52, 1);
`

function App() {
  const [mode, switchMode] = useState(true)
  const [actualTime, setActualTime] = useState(new Date())
  const [settings, setSettings] = useState(false)
  const [animation, changeAnimation] = useState(false)

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

  const hours = new Date().getHours() % 12 === 0 ? '12' : `${new Date().getHours() % 12}`
  const minutes = `:${new Date().getMinutes().toString().padStart(2, '0')}`
  let dayPhase = timeOfDay(new Date().getHours())

  const day = weekDay[new Date().getDay()]
  const month = monthArr[new Date().getMonth()]
  const dayOfMonth = new Date().getDate()

  const theme = {
    mode: mode,
  }

  function changeMode() {
    switchMode(!mode)
  }

  function timeOfDay(actualHour) {
    if (actualHour >= 12) {
      return ' PM'
    } else if (actualHour < 12) {
      return ' AM'
    }
    if (actualHour === 24) {
      return ' AM'
    }
  }

  const showSettings = settings ? (
    <SettingsContainer>
      <SettingsText>{'Change clock needle animation'}</SettingsText>

      <NeedleMode
        onClick={() => {
          changeAnimation(!animation)
        }}
      >
        {animation ? 'Mechanical ' : 'Quartz'}
      </NeedleMode>
    </SettingsContainer>
  ) : null

  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <InfoWrapper
          minutes={minutes}
          hours={hours}
          dayPhase={dayPhase}
          day={day}
          month={month}
          dayOfMonth={dayOfMonth}
        />
        <ClockFace
          seconds={actualTime.getSeconds() + actualTime.getMinutes() * 60 + actualTime.getHours() * 60 * 60}
          changeAnimation={animation}
        />
        <SwitchButton onClick={changeMode}>{mode ? 'Dark mode' : 'Light mode'}</SwitchButton>
        <ArrowDownContainer
          onClick={() => {
            setSettings(!settings)
          }}
        >
          <ArrowDown icon={faAngleDown} $settings={settings} />
        </ArrowDownContainer>
        {showSettings}
      </ThemeProvider>
    </Wrapper>
  )
}

export default App
