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

export const ImageContainer = styled.div`
    width: 100%;
    max-width: 480px;
    overflow-x: auto;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 20px;
    padding: 10px 0;
`;

export const ImageList = styled.div`
    display: flex;
    gap: 10px;
    padding: 0 10px;
`;

export const ImageItem = styled.div`
    width: 400px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 8px;
    flex-shrink: 0;

    img {
        max-width: 100%;
        max-height: 100%;
        border-radius: 8px;
    }
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
`;

export const ApproveButton = styled.button`
    background-color: #444;
    color: white;
`;
