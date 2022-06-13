import styled from 'styled-components'

const SecondHand = styled.div`
  width: 2px;
  height: 90px;
  background-color: red;
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  border-radius: 5px;
  transform-origin: 0 0;
  transform: translate(-50%, 0) rotate(${props => props.a * 6}deg);
  transition: transform 0s linear;

  &::after {
    content: '';
    position: absolute;
    height: 4px;
    width: 4px;
    background-color: ${props => (props.theme.mode ? 'black' : 'white')};
    border-radius: 50%;
    border: 2px solid ${props => (props.theme.mode ? 'red' : 'black')};
    transform: translate(-50%, -50%);
    transition: all 0.8s cubic-bezier(0.99, 0, 0.52, 1);
  }
`

export default SecondHand
