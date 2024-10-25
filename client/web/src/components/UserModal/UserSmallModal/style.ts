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

export const UserSmallModalContent = styled.div`
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 400px;
    max-width: 90%;
`;

export const ModalHeader = styled.div`
    margin-bottom: 20px;
`;

export const ModalBody = styled.div`
    margin-bottom: 20px;

    textarea {
        width: 95%;
        height: 100px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        resize: none;
    }
`;

export const ModalFooter = styled.div`
    display: flex;
    justify-content: flex-end;

    button {
        margin-left: 10px;
        padding: 10px 20px;
        border: none;

        background-color: #666;
        color: white;
        cursor: pointer;
        border-radius: 5px;

        &:hover {
            background-color: #444;
        }
    }

    button:first-child {
        background-color: #ccc;
        color: black;
        &:hover {
            background-color: #444;
            color: white;
        }
    }
`;
