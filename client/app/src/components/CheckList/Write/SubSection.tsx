import React from 'react';
import { TSubSection } from "@/interfaces/checklist/types.ts";
import ChecklistItem from "@/components/CheckList/Write/CheckListItem.tsx";
import * as Styled from "./style.ts";
import H3 from "@/components/Common/Font/Heading/H3";
import { DetailSection } from "@/components/CheckList/Write/DetailSection.tsx";

interface SubSectionProps {
    sectionIndex: number;
    subSectionIndex: number;
    subSectionName: string;
    sectionName: string;
    subSection: TSubSection;
    onItemCheck: (sectionIndex: number, subSectionIndex: number | null, detailSectionIndex: number | null, itemIndex: number, checked: boolean) => void;
}

const SubSection: React.FC<SubSectionProps> = ({ sectionIndex, subSectionIndex, subSectionName, sectionName, subSection, onItemCheck }) => {
    return (
        <div>
            <Styled.StyledSubSection>
                <H3 text={subSection.name} />
            </Styled.StyledSubSection>

            {/* items가 배열인 경우에만 렌더링 */}
            {Array.isArray(subSection.items) && subSection.items.map((item, itemIndex) => (
                <ChecklistItem
                    key={itemIndex}
                    name={subSection.name}
                    sectionName={sectionName}
                    subSectionName={subSection.name}
                    sectionIndex={sectionIndex}  // 섹션 인덱스 전달
                    subSectionIndex={subSectionIndex}  // 서브 섹션 인덱스 전달
                    item={item}
                    onItemCheck={(checked) => onItemCheck(sectionIndex, subSectionIndex, null, itemIndex, checked)}  // 인덱스 전달
                />
            ))}

            {/* detailSections가 존재하면 DetailSection을 렌더링 */}
            {subSection.detailSections && subSection.detailSections.map((detailSection, detailSectionIndex) => (
                <DetailSection
                    key={detailSectionIndex}
                    sectionIndex={sectionIndex}  // 섹션 인덱스 전달
                    subSectionIndex={subSectionIndex}  // 서브 섹션 인덱스 전달
                    detailSection={detailSection}
                    detailSectionIndex={detailSectionIndex}  // 디테일 섹션 인덱스 전달
                    onItemCheck={onItemCheck}
                />
            ))}
        </div>
    );
};

export default SubSection;