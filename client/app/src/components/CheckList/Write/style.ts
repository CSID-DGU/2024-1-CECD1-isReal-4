import styled from "styled-components"

export const StyledSection = styled.div`
    border: 1px solid black;
    width: 100vw;
    text-align: center;
    padding: 10px 0 10px 0;
`

export const StyledSubSection = styled.div`
    padding-left: 2%;
    
`
export const PaddingWrapper = styled.div`
    padding: 2px 0 1px 0;
`

export const StyledListItem = styled.div`
    padding: 10px 0 10px 0;
`

export const StyledDetailSection = styled.div`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 10px;
    background-color: #f9f9f9;

    h4 {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 5px;
    }

    p {
        font-size: 14px;
        color: #666;
        margin-top: 5px;
    }

    img {
        max-width: 100px;
        margin-top: 5px;
        border-radius: 4px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
`;

export const ActiveTextarea = styled.textarea`
    width: 80%;
    height: 80px;
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    resize: none;
`;

export const FileUploadButton = styled.label`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px 0;
  display: inline-block;
  font-size: 16px;
  text-align: center;
  &:hover {
    background-color: #0056b3;
  }
`;

export const CustomFileInput = styled.input`
    display: none;
`