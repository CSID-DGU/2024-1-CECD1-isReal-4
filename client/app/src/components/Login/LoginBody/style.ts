import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-top: 5vh;
`;

export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 10vh;
`;

export const Input = styled.input`
    width: 100%;
    height: 50px;
    padding-left: 10px;
    padding-right: 60px; /* 오른쪽 여백을 충분히 추가 */
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
`;

export const Wrapper = styled.div`
    width: 80%;
    position: relative;
`;

export const ShowPasswordButton = styled.button`
    position: absolute;
    right: 15px; /* 입력 필드의 오른쪽 안쪽에 위치 */
    top: 45%;
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

export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 10px;
`;

export const LoginButton = styled.button`
    width: 80%;
    height: 50px;
    border: 1px solid #ccc;
    background-color: #fff;
    border-radius: 25px;
    cursor: pointer;
`;

export const SignUpContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 30px;
    align-items: column;
`;

export const SignUpText = styled.p`
    color: black;
`;

export const SignUpButton = styled.button`
    color: black;
    cursor: pointer;
    border: none;
    background: none;
    text-decoration: underline;
    margin-top: -2px;
`;
