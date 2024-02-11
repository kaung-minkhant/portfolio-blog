import { styled } from 'styled-components'
import { backgroundColors } from '../../settings/colors'
import QuillEditor from 'react-quill'

export const Editor = styled.div`
  width: 100%;
  min-height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`
export const BlogMetaDataContainer = styled.div`
  align-self: flex-start;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`
export const BlogTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
`
export const BlogTitleInput = styled.input`
  flex: 1;
  border: 1.5px #dee1e2 solid;
  border-radius: 6px;
  font-size: 16px;
  line-height: 1.5;
  padding: 5px 10px;
  transition: border-color 100ms ease-in, background-color 100ms ease-in;
  background-color: #dee1e2;
  outline: none;
  &:hover {
    border-color: #ccc;
  }
  &:focus {
    border-color: ${backgroundColors.secondary};
    background-color: #fff;
  }
`
export const BlogMetaDataLabel = styled.label`
  font-weight: 600;
  font-size: 20px;
`

export const BlogDescription = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
`
export const BlogDescriptionInput = styled.textarea`
  flex: 1;
  outline: none;
  padding: 5px 10px;
  border-radius: 6px;
  border: 1.5px #dee1e2 solid;
  resize: none;
  &:focus {
    border-color: ${backgroundColors.secondary};
    background-color: #fff;
  }
`

export const QuillContainer = styled(QuillEditor)`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
`
export const QuillWrapper = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
`