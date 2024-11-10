import styled from "styled-components";

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6); // 배경을 어둡게 처리
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000; // 모달이 다른 요소 위에 위치하도록 설정
`;

export const ModalContent = styled.div`
    background-color: #fff;
    width: 80%;
    max-width: 900px;
    border-radius: 8px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    position: relative;
    z-index: 1010; // Overlay 위에 모달을 배치
`;

export const ModalHeader = styled.div`
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button: {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 1.5rem;
    }
`;

export const ModalBody = styled.div`
    display: flex;
    padding: 20px;
    gap: 20px;
`;

export const ModalFooter = styled.div`
    padding: 20px;
    border-top: 1px solid #eee;
    display: flex;
    justify-content: flex-end;
    gap: 15px;
`;
export const LeftSection = styled.div`
    flex: 1;
`;

export const RightSection = styled.div`
    flex: 2;
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
`;

export const RightSectionHeader = styled.div`
    margin-bottom: 20px;
`;

export const InfoField = styled.div`
    margin-bottom: 15px;
    padding: 12px;
    background-color: #f1f1f1;
    border-radius: 4px;
    display: flex;
    flex-direction: column;

    label {
        font-weight: bold;
        margin-bottom: 5px;
        font-size: 16px;
    }

    input,
    textarea {
        font-size: 16px;
        border: none;
        background: none;
        resize: none;
        outline: none;
        color: #333;
    }
`;

export const SectionContainer = styled.div`
    background-color: #fff;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 6px;
    margin-bottom: 20px;
`;

export const SectionTitle = styled.h3`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const ImageContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 10px;
`;

export const ImageItem = styled.div`
    width: 80px;
    height: 80px;
    background-color: #eee;
    border-radius: 4px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        max-width: 100%;
        max-height: 100%;
    }
`;

export const ApproveButton = styled.button`
    background-color: #333;
    color: #fff;
    padding: 12px 20px;
    font-size: 18px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #555;
    }
`;

export const RejectButton = styled.button`
    background-color: #fff;
    color: #333;
    padding: 12px 20px;
    font-size: 18px;
    border: 2px solid #333;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
        background-color: #666;
        color: #fff;
    }
`;
