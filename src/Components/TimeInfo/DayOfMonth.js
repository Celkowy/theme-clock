import styled from 'styled-components'

const InfoDayOfMonth = styled.div`
  color: ${props => (props.mode ? 'black' : 'white')};
  transition: all 0.6s;
  font-size: 32px;
  font-weight: bold;
`

function DayOfMonth(props) {
  return <InfoDayOfMonth mode={props.mode}>{props.day}</InfoDayOfMonth>
}

export default DayOfMonth
