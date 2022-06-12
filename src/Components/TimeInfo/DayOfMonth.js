import styled from 'styled-components'

const DayOfMonth = styled.div`
  color: ${props => (props.theme.mode ? 'black' : 'white')};
  transition: all 0.6s;
  font-size: 32px;
  font-weight: bold;
`

export default DayOfMonth
