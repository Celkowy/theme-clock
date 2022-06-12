import styled from 'styled-components'

const SwitchButton = styled.button`
  padding: 10px 15px;
  width: 125px;
  font-size: 18px;
  margin-bottom: 50px;
  border-radius: 5px;
  color: ${props => (props.mode ? 'white' : 'black')};
  background-color: ${props => (props.mode ? 'black' : 'white')};
  cursor: pointer;
  transition: all 0.6s cubic-bezier(0.99, 0, 0.52, 1);
`

export default SwitchButton
