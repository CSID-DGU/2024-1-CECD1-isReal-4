import styled from "styled-components";

export const SmallModalOverlay = styled.div`
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

export const SmallModalContent = styled.div`
    background: white;
    padding: 20px;
    padding-right: 30px;
    width: 400px;
    border-radius: 8px;
`;

export const SmallModalHeader = styled.div`
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
        margin-right: -15px;
    }
`;

export const SmallModalBody = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    label {
        margin-bottom: 5px;
        font-weight: bold;
    }

    textarea {
        padding: 5px;
        width: 100%;
        height: 100px;
        border: 1px solid #ccc;
        border-radius: 4px;
        resize: none;
    }
`;

export const SmallModalFooter = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const CancelButton = styled.button`
    padding: 10px 20px;
    margin-right: 10px;
    background-color: #ccc;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

export const SaveButton = styled.button`
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
