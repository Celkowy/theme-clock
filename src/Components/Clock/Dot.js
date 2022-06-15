import styled from 'styled-components'

const Dot = styled.div`
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 6px;
  width: 6px;
  z-index: 5;
  background-color: ${props => (props.theme.mode ? 'white' : 'black')};
  border-radius: 50%;
  border: 3px solid red;
  transition: all 0.7s cubic-bezier(0.99, 0, 0.52, 1);
`

export default Dot
