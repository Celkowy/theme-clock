import styled from 'styled-components'

const Month = styled.div`
  color: ${props => (props.theme.mode ? 'black' : 'white')};
  transition: all 0.6s;
  border-${props => (props.theme.mode ? 'top' : 'bottom')}: 3px solid ${props =>
  props.theme.mode ? 'black' : 'white'};
`

export default Month
