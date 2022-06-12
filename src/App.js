import ClockFace from './Components/Clock/ClockFace'
import SwitchButton from './Components/SwitchButton'
import Wrapper from './Wrapper'
import InfoWrapper from './Components/TimeInfo/InfoWrapper'
import React, { useState } from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => (props.mode ? 'white' : 'black')};
    transition: all 0.6s cubic-bezier(.99,0,.52,1);
    font-family: 'Mulish', sans-serif;
  }
`

function App() {
  const [mode, switchMode] = useState(true)

  return (
    <Wrapper>
      <GlobalStyle mode={mode} />
      <SwitchButton
        onClick={() => {
          switchMode(!mode)
        }}
        mode={mode}
      >
        {mode ? 'Dark mode' : 'Light mode'}
      </SwitchButton>
      <ClockFace mode={mode} />
      <InfoWrapper mode={mode} />
    </Wrapper>
  )
}

export default App
