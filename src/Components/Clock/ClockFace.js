import HourHand from './HourHand'
import MinuteHand from './MinutHand'
import SecondHand from './SecondHand'
import styled from 'styled-components'
import React, { useState, useEffect } from 'react'

const StyledFace = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: ${props => (props.theme.mode ? 'black' : 'white')};
  position: relative;
  transition: all 0.6s cubic-bezier(0.99, 0, 0.52, 1);
`

function ClockFace(props) {
  const [a, changeA] = useState(20)

  useEffect(() => {
    const interval = setInterval(() => ss(), 1000)
    // console.log('1')
    return () => {
      clearInterval(interval)
    }
  }, [])

  function ss() {
    return changeA(prev => prev + 1)
  }

  return (
    <StyledFace>
      <div>{a}</div>
      <SecondHand a={a} />
      <MinuteHand />
      <HourHand />
    </StyledFace>
  )
}

export default ClockFace
