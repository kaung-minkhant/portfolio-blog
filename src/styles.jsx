import {styled} from 'styled-components'

const generateDirection = (direction) => {
  if (direction) {
    if (direction==='column')
      return 'column';
    else if (direction==='row')
      return 'row';
  } else {
    return 'row';
  }
}
export const ButtonGroup = styled('div').withConfig({
  shouldForwardProp: (prop) => 
    !['direction', 'gap'].includes(prop)
})`
  display: flex;
  flex-direction: ${props => generateDirection(props.direction)};
  gap: ${props => props.gap ? `${props.gap}px` : "10px"};
`

export const Button = styled('button').withConfig({
  shouldForwardProp: (prop) => 
    !['backgroundColor', 'padding', 'fontSize'].includes(prop)
})`
  background-color: ${props => props.backgroundColor ? `${props.backgroundColor}` : 'gray'};
  border: none;
  padding: ${props => props.padding ? props.padding : '10px 10px'};
  font-size: ${props => props.fontSize ? props.fontSize : '15px'};
  border-radius: 5px;
  cursor: pointer;
  &:disabled {
    cursor: default;
  }
`