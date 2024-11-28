import React from "react";
import * as Styled from "./style";
import H2 from "../Common/Font/Heading/H2";
import { useUserModalStore } from "@/stores/useUserModalStore";

interface UserModalProps {
    onApprove: () => void;
    onReject: () => void;
}

const UserModal: React.FC<UserModalProps> = ({ onApprove, onReject }) => {
    const { isOpen, selectedUser, closeModal, openSmallModal } = useUserModalStore();

    if (!isOpen || !selectedUser) return null;

    const handleDownloadDocument = (document: string, type: string, index: number) => {
        const contentType = type === "pdf" ? "application/pdf" : "image/png";
        const byteCharacters = atob(document);
        const byteNumbers = new Array(byteCharacters.length).fill(0).map((_, i) => byteCharacters.charCodeAt(i));
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: contentType });
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = `auth_document_${index + 1}.${type === "pdf" ? "pdf" : "png"}`;
        link.click();

        URL.revokeObjectURL(url);
    };

    return (
        <Styled.ModalOverlay>
            <Styled.ModalContent>
                <Styled.ModalHeader>
                    <H2 text="입주 예정자 자격 신청서" />
                    <button onClick={closeModal}>X</button>
                </Styled.ModalHeader>

                <Styled.ModalBody>
                    <Styled.UserInfo>
                        <label>이름</label>
                        <input type="text" value={selectedUser.memberName} readOnly />

                        <label>이메일</label>
                        <input type="email" value={selectedUser.username} readOnly />

                        <label>연락처</label>
                        <input type="tel" value={selectedUser.phoneNumber} readOnly />

                        <label>아파트 이름</label>
                        <input type="text" value={selectedUser.apartmentName} readOnly />

                        <label>아파트 정보</label>
                        <input type="text" value={selectedUser.apartmentBuildingNumber} readOnly />
                    </Styled.UserInfo>

                    {/* 인증 문서 다운로드 */}
                    <Styled.DocumentSection>
                        <p>인증 문서 개수: {selectedUser.authDocuments?.length || 0}개</p>
                        {selectedUser.authDocuments && selectedUser.authDocuments.length > 0 ? (
                            selectedUser.authDocuments.map((doc: any, index: number) => (
                                <button key={index} onClick={() => handleDownloadDocument(doc.base64, doc.type, index)}>
                                    문서 {index + 1} 다운로드
                                </button>
                            ))
                        ) : (
                            <p>다운로드할 문서가 없습니다.</p>
                        )}
                    </Styled.DocumentSection>
                </Styled.ModalBody>

                <Styled.ModalFooter>
                    <button onClick={closeModal}>닫기</button>
                    <Styled.RejectButton onClick={onReject}>거절하기</Styled.RejectButton>
                    <Styled.ApproveButton onClick={onApprove}>승인하기</Styled.ApproveButton>
                </Styled.ModalFooter>
            </Styled.ModalContent>
        </Styled.ModalOverlay>
    );
};

export default UserModal;