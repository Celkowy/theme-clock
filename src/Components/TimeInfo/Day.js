import styled from 'styled-components'

const InfoDay = styled.div`
  color: ${props => (props.mode ? 'black' : 'white')};
  transition: all 0.6s;
  border-${props => (props.mode ? 'bottom' : 'top')}: 3px solid ${props => (props.mode ? 'black' : 'white')};
`

function Day(props) {
  return <InfoDay mode={props.mode}>{props.day}</InfoDay>
}

export default Day
