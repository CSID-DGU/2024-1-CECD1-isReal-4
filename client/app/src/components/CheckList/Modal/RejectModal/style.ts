import styled from 'styled-components';

export const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(146, 146, 165, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 2000;
`;

export const ModalContainer = styled.div`
    display: flex;
    width: 80%;
    padding: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 40px;
    border-radius: 20px;
    background-color: white;
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    align-self: stretch;
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-self: stretch;
`

export const StyledInput = styled.input`
    display: flex;
    height: 20px;
    width: 400px;
    padding: 20px;
    align-items: center;
    gap: 10px;
    align-self: stretch;
    border-radius: 12px;

`

export const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

interface ButtonProps {
    color?: string
}

export const StyledButton = styled.button<ButtonProps>`
    display: flex;
    width: 10em;
    height: 40px;
    padding: 15px 0;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 20px;
    border: none;

    cursor: pointer;
`