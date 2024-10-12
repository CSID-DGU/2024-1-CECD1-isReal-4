import styled from "styled-components"
import theme from "@/shared/theme.ts";

export const CheckListPageWrapper = styled.div`
    height: auto;
    width: 100vw;
    margin-bottom: 90px;
`

export const AddTextArea = styled.textarea`
    width: 90%;
    height: 100px;
    margin-top: 10px;
    margin-bottom: 20px;
`

export const AddTextButton = styled.button`
    width: 150px;
    height: 36px;
    border-radius: 20px;
    border: none;
    margin-bottom: 20px;
`

export const CustomFileInput = styled.input`
  display: none; 
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

export const RegisterButton = styled.button`
    width: 340px;
    height: 50px;
    border-radius: 25px;
    border: 1px solid black;
    background: ${theme.colorSystem.white};
`