import React from "react";
import * as Styled from "./style";
import H2 from "../Common/Font/Heading/H2";

interface ModalProps {
    title: string;
    defectData: any;
    onClose: () => void;
    onApprove?: () => void;
    onReject?: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, defectData, onClose, onApprove, onReject }) => {
    if (!defectData) return null;
    return (
        <Styled.ModalOverlay>
            <Styled.ModalContent>
                <Styled.ModalHeader>
                    <H2 text={title} />
                    <button onClick={onClose}>X</button>
                </Styled.ModalHeader>
                <Styled.ModalBody>
                    <Styled.LeftSection>
                        <label>아파트 정보</label>
                        <input type='text' value={defectData?.aptInfo || ""} readOnly />

                        <label>입주 예정자 성명</label>
                        <input type='text' value={defectData?.name || ""} readOnly />

                        <label>전화번호</label>
                        <input type='text' value={defectData?.phone || ""} readOnly />

                        <label>이메일</label>
                        <input type='email' value={defectData?.email || ""} readOnly />

                        <label>하자 목록</label>
                        <Styled.CheckList>
                            {defectData?.checkList?.length > 0 ? (
                                defectData.checkList.map((item: string, index: number) => (
                                    <div key={index}>
                                        <input type='checkbox' checked readOnly /> {item}
                                    </div>
                                ))
                            ) : (
                                <p>하자 체크리스트가 없습니다.</p>
                            )}
                        </Styled.CheckList>
                    </Styled.LeftSection>

                    <Styled.RightSection>
                        <label>설명</label>
                        <textarea value={defectData?.description || ""} readOnly />

                        <label>사진 및 동영상</label>
                        <Styled.ImageUpload>
                            {defectData?.images?.length > 0 ? (
                                defectData.images.map((image: string, index: number) => (
                                    <img key={index} src={image} alt={`defect-image-${index}`} />
                                ))
                            ) : (
                                <p>이미지가 없습니다.</p>
                            )}
                        </Styled.ImageUpload>
                    </Styled.RightSection>
                </Styled.ModalBody>

                <Styled.ModalFooter>
                    <Styled.RejectButton onClick={onReject}>거절하기</Styled.RejectButton>
                    <Styled.ApproveButton onClick={onApprove}>승인하기</Styled.ApproveButton>
                </Styled.ModalFooter>
            </Styled.ModalContent>
        </Styled.ModalOverlay>
    );
};

export default Modal;
