import React from "react";
import * as Styled from "./style";
import H2 from "../Common/Font/Heading/H2";

interface UserModalProps {
    onClose: () => void;
    onReject: () => void;
    onApprove: () => void;
    selectedUser: any;
}

const UserModal: React.FC<UserModalProps> = ({ onClose, onReject, onApprove, selectedUser }) => {
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
                            {selectedUser.images?.map((image: string, index: number) => (
                                <Styled.ImageItem key={index}>
                                    <img src={image} alt={`사진 ${index + 1}`} />
                                </Styled.ImageItem>
                            ))}
                        </Styled.ImageList>
                    </Styled.ImageContainer>

                    <Styled.UserInfo>
                        <label>이름</label>
                        <input type='text' value={selectedUser.name} readOnly />

                        <label>이메일</label>
                        <input type='email' value={selectedUser.email} readOnly />

                        <label>연락처</label>
                        <input type='tel' value={selectedUser.phone} readOnly />

                        <label>신청 날짜</label>
                        <input type='text' value={selectedUser.date} readOnly />
                    </Styled.UserInfo>
                </Styled.ModalBody>

                <Styled.ModalFooter>
                    <button onClick={onClose}>닫기</button>
                    <Styled.RejectButton onClick={onReject}>거절하기</Styled.RejectButton>
                    <Styled.ApproveButton onClick={onApprove}>승인하기</Styled.ApproveButton>
                </Styled.ModalFooter>
            </Styled.ModalContent>
        </Styled.ModalOverlay>
    );
};

export default UserModal;
