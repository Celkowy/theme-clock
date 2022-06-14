import styled from 'styled-components'

const Time = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  font-size: 48px;
  color: ${props => (props.theme.mode ? 'black' : 'white')};
  transition: all 0.6s;
  font-weight: bold;
`
export default Time
