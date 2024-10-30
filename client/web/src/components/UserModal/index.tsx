import React from "react";
import * as Styled from "./style";
import H2 from "../Common/Font/Heading/H2";

interface UserModalProps {
    onClose: () => void;
    onReject: () => void;
    onApprove: () => void;
    selectedUser: any;
    isRejected: boolean;
}

const UserModal: React.FC<UserModalProps> = ({ onClose, onReject, onApprove, selectedUser, isRejected }) => {
    if (!selectedUser) return null;

    return (
        <Styled.ModalOverlay>
            <Styled.ModalContent>
                <Styled.ModalHeader>
                    <H2 text='입주 예정자 자격 신청서' />
                    <button onClick={onClose}>X</button>
                </Styled.ModalHeader>

                <Styled.ModalBody>
                    <Styled.ImageContainer>
                        <Styled.ImageList>
                            {/* 프로필 이미지 */}
                            {selectedUser.profileImage && (
                                <Styled.ImageItem>
                                    <img src={selectedUser.profileImage} alt='프로필 사진' />
                                </Styled.ImageItem>
                            )}
                            {/* 인증 문서 이미지 */}
                            {selectedUser.authDocument && (
                                <Styled.ImageItem>
                                    <img src={selectedUser.authDocument} alt='인증 문서' />
                                </Styled.ImageItem>
                            )}
                        </Styled.ImageList>
                    </Styled.ImageContainer>

                    <Styled.UserInfo>
                        <label>이름</label>
                        <input type='text' value={selectedUser.memberName} readOnly />

                        <label>이메일</label>
                        <input type='email' value={selectedUser.username} readOnly />

                        <label>연락처</label>
                        <input type='tel' value={selectedUser.phoneNumber} readOnly />

                        <label>아파트 이름</label>
                        <input type='text' value={selectedUser.apartmentName} readOnly />

                        <label>건물 번호</label>
                        <input type='text' value={selectedUser.apartmentBuildingNumber} readOnly />
                    </Styled.UserInfo>
                </Styled.ModalBody>

                {!isRejected && (
                    <Styled.ModalFooter>
                        <button onClick={onClose}>닫기</button>
                        <Styled.RejectButton onClick={onReject}>거절하기</Styled.RejectButton>
                        <Styled.ApproveButton onClick={onApprove}>승인하기</Styled.ApproveButton>
                    </Styled.ModalFooter>
                )}
            </Styled.ModalContent>
        </Styled.ModalOverlay>
    );
};

export default UserModal;
