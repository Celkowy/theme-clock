import styled from 'styled-components'

const Dot = styled.div`
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  height: 6px;
  width: 6px;
  z-index: 5;
  background-color: ${props => (props.theme.mode ? 'black' : 'white')};
  border-radius: 50%;
  border: 3px solid ${props => (props.theme.mode ? 'red' : 'black')};
  transform: translate(-50%, -50%);
  box-shadow: ${props => (props.theme.mode ? 'unset' : '0px 0px 15px 5px rgba(66, 68, 90, 1)')};
  transition: all 0.7s cubic-bezier(0.99, 0, 0.52, 1);
`

export default Dot
