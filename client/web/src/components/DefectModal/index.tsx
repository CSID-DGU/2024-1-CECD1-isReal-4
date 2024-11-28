import React from "react";
import * as Styled from "./style";
import H3 from "../Common/Font/Heading/H3";
import { filterCheckedSections } from "@/utils/filterCheckedSections";

interface ChecklistItem {
    id?: string;
    description: string;
    checked?: boolean;
    appendText?: string;
    appendImages?: string[];
}

interface DetailSection {
    name: string;
    items: ChecklistItem[] | null;
}

interface SubSection {
    name: string;
    items: ChecklistItem[] | null;
    detailSections: DetailSection[] | null;
}

interface SectionState {
    name: string;
    items: ChecklistItem[] | null;
    subSections: SubSection[] | null;
}

interface ModalProps {
    title: string;
    defectData: {
        apartmentName?: string;
        apartmentBuildingNumber?: string;
        memberName?: string;
        phoneNumber?: string;
        username?: string;
        sections?: SectionState[];
        reviewCompletionTime?: string;
        reviewer?: string;
        reviewComment?: string;
    };
    onClose: () => void;
    onApprove?: () => void;
    onReject?: () => void;
    showActions?: boolean;
}

const DefectModal: React.FC<ModalProps> = ({ title, defectData, onClose, onApprove, onReject, showActions = true }) => {
    if (!defectData) return null;

    const renderItems = (items: ChecklistItem[] | ChecklistItem | null) => {
        // items가 null 또는 undefined인 경우 처리
        if (!items) {
            return <p>항목 없음</p>;
        }

        // items가 배열인 경우 처리
        if (Array.isArray(items)) {
            const filteredItems = items.filter((item) => item.checked);

            // 체크된 항목이 없는 경우 처리
            if (filteredItems.length === 0) {
                return <p>체크된 항목 없음</p>;
            }

            return (
                <Styled.Items>
                    {filteredItems.map((item, idx) => (
                        <Styled.Item key={idx}>
                            <p>설명: {item.description || "설명 없음"}</p>
                            {item.appendText && <p>추가 설명: {item.appendText}</p>}
                            {item.appendImages && item.appendImages.length > 0 ? (
                                <Styled.ImageContainer>
                                    {item.appendImages.map((image, imgIdx) => {
                                        const validImageSrc = image.startsWith("data:image/")
                                            ? image
                                            : `data:image/jpeg;base64,${image}`;

                                        return (
                                            <Styled.ImageItem key={imgIdx}>
                                                <Styled.Image>
                                                    <a href={validImageSrc} download={`image-${imgIdx}`}>
                                                        <img src={validImageSrc} alt={`item-image-${imgIdx}`} />
                                                    </a>
                                                </Styled.Image>
                                            </Styled.ImageItem>
                                        );
                                    })}
                                </Styled.ImageContainer>
                            ) : (
                                <p>이미지 없음</p>
                            )}
                        </Styled.Item>
                    ))}
                </Styled.Items>
            );
        }

        // items가 배열이 아닌 경우(객체일 경우) 처리
        if (typeof items === "object") {
            // 객체 데이터를 직접 렌더링
            return (
                <Styled.Item>
                    <p>설명: {items.description || "설명 없음"}</p>
                    {items.appendText && <p>추가 설명: {items.appendText}</p>}
                    {items.appendImages && items.appendImages.length > 0 ? (
                        <Styled.ImageContainer>
                            {items.appendImages.map((image, imgIdx) => {
                                const validImageSrc = image.startsWith("data:image/")
                                    ? image
                                    : `data:image/jpeg;base64,${image}`;

                                return (
                                    <Styled.ImageItem key={imgIdx}>
                                        <Styled.Image>
                                            <a href={validImageSrc} download={`image-${imgIdx}`}>
                                                <img src={validImageSrc} alt={`item-image-${imgIdx}`} />
                                            </a>
                                        </Styled.Image>
                                    </Styled.ImageItem>
                                );
                            })}
                        </Styled.ImageContainer>
                    ) : (
                        <p>이미지 없음</p>
                    )}
                </Styled.Item>
            );
        }

        // items가 예상치 못한 데이터 형식인 경우 처리
        return <p>올바르지 않은 데이터 형식</p>;
    };

    const renderDetailSections = (detailSections: DetailSection[] | null) => {
        if (!detailSections || detailSections.length === 0) {
            return <p>세부 섹션 없음</p>;
        }

        return detailSections.map((detailSection, detailIdx) => (
            <Styled.DetailSection key={detailIdx}>
                <Styled.DetailSectionTitle>{detailSection.name || "세부 섹션 없음"}</Styled.DetailSectionTitle>
                {renderItems(detailSection.items)}
            </Styled.DetailSection>
        ));
    };

    const renderSubSections = (subSections: SubSection[] | null) => {
        if (!subSections || subSections.length === 0) {
            return <p>하위 섹션 없음</p>;
        }

        return subSections.map((subSection, subIdx) => (
            <Styled.SubSection key={subIdx}>
                <Styled.SubSectionTitle>{subSection.name}</Styled.SubSectionTitle>
                {renderItems(subSection.items)}
                {renderDetailSections(subSection.detailSections)}
            </Styled.SubSection>
        ));
    };

    const renderSections = (sections: SectionState[] | undefined) => {
        if (!sections || sections.length === 0) {
            return <p>체크리스트 데이터 없음</p>;
        }

        return sections.map((section, index) => (
            <Styled.SectionContainer key={index}>
                <Styled.SectionTitle>{section.name || "섹션 없음"}</Styled.SectionTitle>
                {renderItems(section.items)}
                {renderSubSections(section.subSections)}
            </Styled.SectionContainer>
        ));
    };

    return (
        <Styled.ModalOverlay>
            <Styled.ModalContent>
                <Styled.ModalHeader>
                    <h2>{title}</h2>
                    <button onClick={onClose}>X</button>
                </Styled.ModalHeader>

                <Styled.ModalBody>
                    <Styled.LeftSection>
                        <Styled.InfoField>
                            <label>아파트 정보</label>
                            <input
                                type='text'
                                value={`${defectData.apartmentName || "없음"}, ${
                                    defectData.apartmentBuildingNumber || "없음"
                                }`}
                                readOnly
                            />
                        </Styled.InfoField>
                        <Styled.InfoField>
                            <label>입주 예정자 성명</label>
                            <input type='text' value={defectData.memberName || "없음"} readOnly />
                        </Styled.InfoField>
                        <Styled.InfoField>
                            <label>전화번호</label>
                            <input type='text' value={defectData.phoneNumber || "없음"} readOnly />
                        </Styled.InfoField>
                        <Styled.InfoField>
                            <label>이메일</label>
                            <input type='email' value={defectData.username || "없음"} readOnly />
                        </Styled.InfoField>
                        <Styled.InfoField>
                            <label>검토자</label>
                            <input type='text' value={defectData.reviewer || "없음"} readOnly />
                        </Styled.InfoField>

                        <Styled.InfoField>
                            <label>검토 코멘트</label>
                            <textarea value={defectData.reviewComment || "없음"} readOnly />
                        </Styled.InfoField>

                        <Styled.InfoField>
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
                        </Styled.InfoField>
                    </Styled.LeftSection>

                    <Styled.RightSection>
                        <Styled.RightSectionHeader>
                            <H3 text='하자 체크리스트' />
                        </Styled.RightSectionHeader>
                        {renderSections(filterCheckedSections(defectData.sections))}
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
