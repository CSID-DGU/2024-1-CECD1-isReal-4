import styled from "styled-components";

export const PageContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const SidebarContainer = styled.div`
    width: 300px;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    background-color: #f8f9fa;
    padding: 20px;
    overflow-y: auto;
`;

export const ContentArea = styled.div`
    flex: 1;
    margin-left: 300px;
    padding: 20px;
`;

export const MainContent = styled.div`
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
    margin-top: 80px;
    padding: 0 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 50px;
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 20px;
`;

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const FormField = styled.div`
    display: flex;
    flex-direction: column;
    label {
        font-weight: bold;
        margin-bottom: 8px;
    }
    input {
        padding: 8px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
`;

export const SubmitButton = styled.button`
    padding: 15px 20px;
    font-size: 16px;
    color: #fff;
    background-color: #444;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    margin-top: 30px;

    &:hover {
        background-color: #666;
    }
`;
