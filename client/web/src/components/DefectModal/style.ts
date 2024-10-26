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
    width: 800px;
    max-width: 90%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
    border-bottom: 1px solid #ddd;

    h2 {
        font-size: 1.5rem;
        margin: 0;
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
    gap: 20px;
`;

export const LeftSection = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;

    label {
        font-weight: bold;
    }

    input,
    textarea {
        width: 100%;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 1rem;
    }

    textarea {
        resize: none;
        height: 80px;
    }
`;

export const RightSection = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;

    label {
        font-weight: bold;
    }
`;

export const SectionContainer = styled.div`
    margin-bottom: 10px;
`;

export const SectionTitle = styled.h3`
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 5px;
`;

export const SubSectionContainer = styled.div`
    padding-left: 20px;
    margin-bottom: 10px;
`;

export const SubSectionTitle = styled.h4`
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 5px;
`;

export const ImageContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 5px;

    img {
        width: 60px;
        height: 60px;
        object-fit: cover;
        border: 1px solid #ddd;
        border-radius: 4px;
    }
`;

export const ModalFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 10px;
`;

export const RejectButton = styled.button`
    background-color: #e74c3c;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #c0392b;
    }
`;

export const ApproveButton = styled.button`
    background-color: #2ecc71;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #27ae60;
    }
`;
