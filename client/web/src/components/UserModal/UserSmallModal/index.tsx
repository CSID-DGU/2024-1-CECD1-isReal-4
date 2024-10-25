import React, { useState } from "react";
import * as Styled from "./style";
import H2 from "@/components/Common/Font/Heading/H2";

interface UserSmallModalProps {
    onClose: () => void;
    onSave: (reason: string) => void;
}

const UserSmallModal: React.FC<UserSmallModalProps> = ({ onClose, onSave }) => {
    const [rejectReason, setRejectReason] = useState("");

    const handleSave = () => {
        onSave(rejectReason);
    };

    return (
        <Styled.ModalOverlay>
            <Styled.UserSmallModalContent>
                <Styled.ModalHeader>
                    <H2 text='거절 사유' />
                </Styled.ModalHeader>

                <Styled.ModalBody>
                    <textarea
                        placeholder='거절 사유를 입력해주세요'
                        value={rejectReason}
                        onChange={(e) => setRejectReason(e.target.value)}
                    />
                </Styled.ModalBody>

                <Styled.ModalFooter>
                    <button onClick={onClose}>닫기</button>
                    <button onClick={handleSave}>저장</button>
                </Styled.ModalFooter>
            </Styled.UserSmallModalContent>
        </Styled.ModalOverlay>
    );
};

export default UserSmallModal;
