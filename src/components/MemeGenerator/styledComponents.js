// Style your components here

import styled from 'styled-components'

export const Heading = styled.p`
  color: #0070c1;
  font-family: 'Roboto';
  align-self: ${props => props.align};
  font-size: ${props => props.fontSz}px;
  align-self: ${props => props.alignPara};
`

export const DivContainer = styled.div`
  background-image: url(${props => props.bgUrl});
  height: 100vh;
  width: 50%;
  font-size: ${props => props.font}px;
  color: ${props => props.clr};
`
