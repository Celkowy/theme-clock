import styled from 'styled-components'

const InfoMonth = styled.div`
  color: ${props => (props.mode ? 'black' : 'white')};
  transition: all 0.6s;
  border-${props => (props.mode ? 'top' : 'bottom')}: 3px solid ${props => (props.mode ? 'black' : 'white')};
`

function Month(props) {
  return <InfoMonth mode={props.mode}>{props.month}</InfoMonth>
}

export default Month
