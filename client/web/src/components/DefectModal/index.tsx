import React from "react";
import * as Styled from "./style";
import H2 from "@/components/Common/Font/Heading/H2";

interface ModalProps {
    title: string;
    defectData: any;
    onClose: () => void;
    onApprove?: () => void;
    onReject?: () => void;
    showActions?: boolean; // 버튼 표시 여부
}

const DefectModal: React.FC<ModalProps> = ({ title, defectData, onClose, onApprove, onReject, showActions = true }) => {
    if (!defectData) return null;

    const renderSections = (sections: any[]) => {
        return sections.map((section, index) => (
            <Styled.SectionContainer key={index}>
                <Styled.SectionTitle>{section.name || "없음"}</Styled.SectionTitle>
                <p>설명: {section.items?.description ?? "없음"}</p>
                <p>추가 설명: {section.items?.appendText ?? "없음"}</p>
                {section.items?.appendImages && section.items.appendImages.length > 0 ? (
                    <Styled.ImageContainer>
                        {section.items.appendImages.map((image: string, idx: number) => (
                            <img key={idx} src={image} alt={`section-image-${idx}`} />
                        ))}
                    </Styled.ImageContainer>
                ) : (
                    <p>이미지: 없음</p>
                )}

                {section.subSections && section.subSections.length > 0 && (
                    <div>
                        <h4>하위 섹션</h4>
                        {section.subSections.map((subSection: any, subIndex: number) => (
                            <Styled.SubSectionContainer key={subIndex}>
                                <Styled.SubSectionTitle>{subSection.name || "없음"}</Styled.SubSectionTitle>
                                <p>설명: {subSection.items?.description ?? "없음"}</p>
                                <p>추가 설명: {subSection.items?.appendText ?? "없음"}</p>
                                {subSection.items?.appendImages && subSection.items.appendImages.length > 0 ? (
                                    <Styled.ImageContainer>
                                        {subSection.items.appendImages.map((image: string, subImgIdx: number) => (
                                            <img key={subImgIdx} src={image} alt={`sub-section-image-${subImgIdx}`} />
                                        ))}
                                    </Styled.ImageContainer>
                                ) : (
                                    <p>이미지: 없음</p>
                                )}
                            </Styled.SubSectionContainer>
                        ))}
                    </div>
                )}
            </Styled.SectionContainer>
        ));
    };

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
                        <input
                            type='text'
                            value={`${defectData.apartmentName || "없음"}, ${
                                defectData.apartmentBuildingNumber || "없음"
                            }`}
                            readOnly
                        />

                        <label>입주 예정자 성명</label>
                        <input type='text' value={defectData.memberName || "없음"} readOnly />

                        <label>전화번호</label>
                        <input type='text' value={defectData.phoneNumber || "없음"} readOnly />

                        <label>이메일</label>
                        <input type='email' value={defectData.username || "없음"} readOnly />

                        <label>검토자</label>
                        <input type='text' value={defectData.reviewer || "없음"} readOnly />

                        <label>검토 코멘트</label>
                        <textarea value={defectData.reviewComment || "없음"} readOnly />

                        <label>검토 완료 시간</label>
                        <input
                            type='text'
                            value={
                                defectData.reviewCompletionTime
                                    ? new Date(defectData.reviewCompletionTime).toLocaleString()
                                    : "없음"
                            }
                            readOnly
                        />
                    </Styled.LeftSection>

                    <Styled.RightSection>
                        <label>하자 체크리스트</label>
                        {defectData.sections && defectData.sections.length > 0 ? (
                            renderSections(defectData.sections)
                        ) : (
                            <p>하자 체크리스트가 없습니다.</p>
                        )}
                    </Styled.RightSection>
                </Styled.ModalBody>

                {showActions && (
                    <Styled.ModalFooter>
                        <Styled.RejectButton onClick={onReject}>거절하기</Styled.RejectButton>
                        <Styled.ApproveButton onClick={onApprove}>승인하기</Styled.ApproveButton>
                    </Styled.ModalFooter>
                )}
            </Styled.ModalContent>
        </Styled.ModalOverlay>
    );
};

export default DefectModal;
