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

    return (
        <Styled.ModalOverlay>
            <Styled.ModalContent>
                <Styled.ModalHeader>
                    <H2 text="입주 예정자 자격 신청서" />
                    <button onClick={closeModal}>X</button>
                </Styled.ModalHeader>

                <Styled.ModalBody>
                    <Styled.ImageContainer>
                        <Styled.ImageList>
                            {selectedUser.authDocument && (
                                <Styled.ImageItem>
                                    {selectedUser.authDocumentType === "pdf" ? (
                                        <a
                                            href={`data:application/pdf;base64,${selectedUser.authDocument}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            PDF 문서 보기
                                        </a>
                                    ) : (
                                        <img
                                            src={`data:image/png;base64,${selectedUser.authDocument}`}
                                            alt="인증 문서"
                                        />
                                    )}
                                </Styled.ImageItem>
                            )}
                        </Styled.ImageList>
                    </Styled.ImageContainer>

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