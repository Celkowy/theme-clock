import styled from 'styled-components'

const Time = styled.div`
  text-align: center;
  font-size: 48px;
  color: ${props => (props.theme.mode ? 'black' : 'white')};
  transition: all 0.6s;
  font-weight: bold;
`
export default Time
