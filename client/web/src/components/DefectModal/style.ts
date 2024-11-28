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
    width: 80%;
    max-width: 1000px;
    max-height: 80%;
    border-radius: 8px;
    overflow-y: auto;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

export const ModalHeader = styled.div`
    padding: 20px;
    background-color: #f1f1f1;
    border-bottom: 1px solid #ddd;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
        margin: 0;
        font-size: 1.5rem;
    }

    button {
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
    }
`;

export const ModalBody = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px;
    gap: 20px;
    overflow-y: auto;
`;

export const LeftSection = styled.div`
    flex: 1;
    overflow-y: auto;
`;

export const RightSection = styled.div`
    flex: 2;
    background: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    overflow-y: auto;
`;

export const RightSectionHeader = styled.div`
    margin-bottom: 20px;
`;

export const SectionContainer = styled.div`
    margin-bottom: 20px;
    padding: 15px;
    background: white;
    border: 1px solid #ddd;
    border-radius: 6px;
`;

export const SectionTitle = styled.h3`
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const Items = styled.div`
    margin-top: 10px;
`;

export const Item = styled.div`
    padding: 10px;
    background: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 6px;
    margin-bottom: 10px;

    p {
        margin: 5px 0;
        font-size: 0.95rem;
    }
`;

export const ImageContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 10px;
`;

export const ImageItem = styled.div`
    width: 80px;
    height: 80px;
    border: 1px solid #ddd;
    border-radius: 4px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        max-width: 100%;
        max-height: 100%;
    }
`;

export const SubSections = styled.div`
    margin-top: 15px;
    padding-left: 15px;
    border-left: 2px solid #ddd;
`;

export const DetailSections = styled.div`
    margin-top: 15px;
    padding-left: 15px;
    border-left: 2px solid #ddd;
`;

export const DetailSection = styled.div`
    margin-top: 10px;
    padding: 10px;
    background: #f1f1f1;
    border: 1px solid #ccc;
    border-radius: 6px;
`;

export const DetailSectionTitle = styled.h4`
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 5px;
`;

export const ModalFooter = styled.div`
    padding: 20px;
    border-top: 1px solid #ddd;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
`;

export const InfoField = styled.div`
    margin-bottom: 15px;

    label {
        font-weight: bold;
        font-size: 1rem;
        margin-bottom: 5px;
        display: block;
    }

    input,
    textarea {
        width: 90%;
        padding: 10px;
        font-size: 1rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        margin-top: 5px;
        background: #f9f9f9;
        resize: none;
    }
`;

export const SubSection = styled.div`
    margin-top: 10px;
    padding: 10px;
    background: #f5f5f5;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
`;

export const SubSectionTitle = styled.h4`
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 10px;
    color: #333;
`;

export const Image = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 4px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
`;

export const RejectButton = styled.button`
    background: #ff4d4f;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    cursor: pointer;

    &:hover {
        background: #d9363e;
    }
`;

export const ApproveButton = styled.button`
    background: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    cursor: pointer;

    &:hover {
        background: #388e3c;
    }
`;
