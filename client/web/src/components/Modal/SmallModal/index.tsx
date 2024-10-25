import React from "react";
import * as Styled from "./style";
import H2 from "@/components/Common/Font/Heading/H2";

interface SmallModalProps {
    title: string;
    rejectReason: string;
    onClose: () => void;
    onSave: () => void;
    onRejectReasonChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const SmallModal: React.FC<SmallModalProps> = ({ title, rejectReason, onClose, onSave, onRejectReasonChange }) => {
    return (
        <Styled.SmallModalOverlay>
            <Styled.SmallModalContent>
                <Styled.SmallModalHeader>
                    <H2 text={title} />
                    <button onClick={onClose}>X</button>
                </Styled.SmallModalHeader>
                <Styled.SmallModalBody>
                    <textarea
                        placeholder='거절 사유를 입력해주세요'
                        value={rejectReason}
                        onChange={onRejectReasonChange}
                    />
                </Styled.SmallModalBody>
                <Styled.SmallModalFooter>
                    <Styled.CancelButton onClick={onClose}>취소</Styled.CancelButton>
                    <Styled.SaveButton onClick={onSave}>저장</Styled.SaveButton>
                </Styled.SmallModalFooter>
            </Styled.SmallModalContent>
        </Styled.SmallModalOverlay>
    );
};

export default SmallModal;
