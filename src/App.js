import ClockFace from './Components/Clock/ClockFace'
import SwitchButton from './Components/SwitchButton'
import Wrapper from './Wrapper'
import InfoWrapper from './Components/TimeInfo/InfoWrapper'
import React, { useState } from 'react'
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

  const theme = {
    mode: mode,
  }

  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <SwitchButton
          onClick={() => {
            switchMode(!mode)
          }}
          mode={mode}
        >
          {mode ? 'Dark mode' : 'Light mode'}
        </SwitchButton>
        <ClockFace />
        <InfoWrapper />
      </ThemeProvider>
    </Wrapper>
  )
}

export default App
