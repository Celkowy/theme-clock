import styled from 'styled-components'

const SwitchButton = styled.button`
  padding: 10px 15px;
  width: 140px;
  font-size: 18px;
  margin-top: 50px;
  maring-bottom: 50px;
  border-radius: 10px;
  color: ${props => (props.theme.mode ? 'white' : 'black')};
  background-color: ${props => (props.theme.mode ? 'black' : 'white')};
  cursor: pointer;
  border: none;
  font-weight: bold;
  transition: color 0.6s cubic-bezier(0.99, 0, 0.52, 1), background-color 0.6s cubic-bezier(0.99, 0, 0.52, 1),
    transform 0.3s ease;

  &:active {
    transform: scale(0.98);
  }
`
export default SwitchButton
