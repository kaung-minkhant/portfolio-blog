import {styled} from 'styled-components'

export const Preview = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`

export const MarkdownContainer = styled.div`
  width: 80%;
  height: 100%;
  border-radius: 5px;
  padding: 0px 20px;
  border: 1px solid black;
  overflow: auto;
  box-sizing: border-box;
  & > * {
    all: revert;
  }
`

export const PreviewTitle = styled.h2`
  
`