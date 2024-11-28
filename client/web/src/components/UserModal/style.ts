import styled from "styled-components";

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const ModalContent = styled.div`
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 500px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ModalHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    h2 {
        margin: 0;
        font-size: 1.5rem;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 1.5rem;
    }
`;

export const ModalBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const UserInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    label {
        font-weight: bold;
        margin-bottom: 0px;
    }

    input {
        width: 95%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        margin-bottom: 15px;
    }
`;

export const DocumentSection = styled.div`
    width: 100%;
    margin-top: 20px;
    text-align: left;

    p {
        font-weight: bold;
        margin-bottom: 10px;
    }

    button {
        padding: 8px 12px;
        margin: 5px 0;
        background-color: #444;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s;

        &:hover {
            background-color: #333;
        }
    }
`;

export const ModalFooter = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    button {
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
`;

export const RejectButton = styled.button`
    background-color: #666;
    color: white;

    &:hover {
        background-color: #555;
    }
`;

export const ApproveButton = styled.button`
    background-color: #444;
    color: white;

    &:hover {
        background-color: #333;
    }
`;
