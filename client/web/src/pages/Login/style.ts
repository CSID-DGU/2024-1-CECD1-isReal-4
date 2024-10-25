import styled from "styled-components";

export const LoginContainer = styled.div`
    display: flex;
    height: 100vh;
`;

export const WelcomeSection = styled.div`
    flex: 1;
    padding: 120px;
    background-color: #f0f0f0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const LoginSection = styled.div`
    flex: 1;
    padding: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
`;

export const InputGroup = styled.div`
    margin-bottom: 20px;
`;

export const InputGroupSection = styled.div`
    margin-bottom: 5px;
`;

export const Input = styled.input`
    width: 140%;
    padding: 15px;
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

export const ShowPasswordBtn = styled.button`
    margin-top: 10px;
    cursor: pointer;
    background: none;
    border: none;
    color: #007bff;
`;

export const SignInButton = styled.button<{ disabled: boolean }>`
    width: 150%;
    padding: 20px;
    margin-top: 20px;
    font-size: 16px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    background-color: ${({ disabled }) => (disabled ? "#ccc" : "#666")};
    color: ${({ disabled }) => (disabled ? "#666" : "white")};
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${({ disabled }) => (disabled ? "#ccc" : "#777")};
    }
`;
