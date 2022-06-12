import styled from 'styled-components'

const InfoTime = styled.div`
  text-align: center;
  font-size: 48px;
  color: ${props => (props.mode ? 'black' : 'white')};
  transition: all 0.6s;
  font-weight: bold;
`

function Time(props) {
  return <InfoTime mode={props.mode}>{props.time}</InfoTime>
}

export default Time
