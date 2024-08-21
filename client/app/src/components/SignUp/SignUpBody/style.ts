import styled from "styled-components";

export const Container = styled.div`
    display: column;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    margin-top: 30px;
    margin-left: 30px;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 90%;
    margin-bottom: 25px;
`;

export const Label = styled.label`
    margin-bottom: 10px;
    font-size: 14px;
    color: #333;
`;

export const SideButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;

export const Input = styled.input`
    width: 100%;
    height: 50px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding-left: 10px;
    margin-right: 10px;
    box-sizing: border-box;
`;

export const CheckButton = styled.button`
    height: 50px;
    padding: 0 20px;
    background-color: #e0e0e0;
    border: none;
    border-radius: 15px;
    font-size: 14px;
    cursor: pointer;
    color: #333;
    white-space: nowrap;
`;

export const CommonWrapper = styled.div`
    width: 100%;
    position: relative;
`;

export const ShowPasswordButton = styled.button`
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: black;
    font-size: 14px;
    cursor: pointer;
    padding: 0;
    height: 100%;
    display: flex;
    align-items: center;
`;

export const MessageText = styled.p<{ match: boolean }>`
    color: ${({ match }) => (match ? "green" : "red")};
    font-size: 12px;
    margin-top: 5px;
    margin-left: 5px;
`;

export const LineContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 90%;
`;

export const LineWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 30%;
`;

export const Select = styled.select`
    width: 100%;
    height: 50px;
    padding: 0 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
    color: #333;
    line-height: 1.5;
    background-color: #fff;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    cursor: pointer;

    &:focus {
        border-color: black;
        outline: none;
    }
`;

export const NumberInput = styled.input`
    width: 100%;
    height: 50px;
    padding: 0 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
    box-sizing: border-box;
`;

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    width: 90%;
    margin-top: 40px;
`;

export const UploadDocButton = styled.button<{ disabled: boolean }>`
    width: 100%;
    height: 50px;
    padding: 10px 20px;
    font-size: 16px;
    color: ${({ disabled }) => (disabled ? "#aaa" : "#fff")};
    background-color: ${({ disabled }) => (disabled ? "#ddd" : "#50555C")};
    border: none;
    border-radius: 5px;
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
    transition: background-color 0.3s, color 0.3s, opacity 0.3s;

    &:hover {
        background-color: ${({ disabled }) => (disabled ? "#ddd" : "#ccc")};
    }
`;
