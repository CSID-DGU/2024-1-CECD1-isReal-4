import styled from "styled-components";

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const ModalContent = styled.div`
    background: white;
    padding: 30px;
    width: 1800px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
`;

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    h2 {
        margin: 0;
    }

    button {
        background: none;
        border: none;
        font-size: 20px;
        cursor: pointer;
    }
`;

export const ModalBody = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
`;

export const LeftSection = styled.div`
    flex: 1;
    margin-right: 200px;
    display: flex;
    flex-direction: column;

    label {
        margin-bottom: 10px;
        font-weight: bold;
        margin-top: 20px;
    }

    input,
    textarea {
        margin-bottom: 10px;
        padding: 10px;
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
`;

export const RightSection = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-right: 20px;

    label {
        margin-bottom: 5px;
        font-weight: bold;
        margin-top: 20px;
    }

    textarea {
        margin-bottom: 10px;
        padding: 10px;
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 4px;
        height: 100px;
        resize: none;
    }
`;

export const CheckList = styled.div`
    margin-bottom: 10px;
    div {
        margin-bottom: 5px;
    }
`;

export const ImageUpload = styled.div`
    display: flex;
    img {
        width: 60px;
        height: 60px;
        margin-right: 10px;
        object-fit: cover;
        border-radius: 4px;
        border: 1px solid #ddd;
    }
`;

export const ModalFooter = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

export const RejectButton = styled.button`
    padding: 10px 20px;
    background-color: #ccc;
    color: black;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 10px;

    &:hover {
        background-color: #444;
    }
`;

export const ApproveButton = styled.button`
    padding: 10px 20px;
    background-color: #666;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #444;
    }
`;
