import React from 'react';
import { TSubSection } from "@/interfaces/checklist/types.ts";
import ChecklistItem from "@/components/CheckList/Write/CheckListItem.tsx";
import * as Styled from "./style.ts";
import H3 from "@/components/Common/Font/Heading/H3";
import { DetailSection } from "@/components/CheckList/Write/DetailSection.tsx";

interface SubSectionProps {
    subSectionName: string;
    sectionName: string;
    subSection: TSubSection;
    onItemCheck: (sectionName: string, subSectionName: string | null, detailSectionName: string | null, itemIndex: number, checked: boolean) => void;
}

const SubSection: React.FC<SubSectionProps> = ({ subSectionName, sectionName, subSection, onItemCheck }) => {
    return (
        <div>
            <Styled.StyledSubSection>
                <H3 text={subSection.name} />
            </Styled.StyledSubSection>

            {/* items가 배열인 경우에만 렌더링 */}
            {Array.isArray(subSection.items) && subSection.items.map((item, index) => (
                <ChecklistItem
                    key={index}
                    name={subSection.name}
                    subSectionName={subSection.name}
                    sectionName={sectionName}
                    item={item}
                    onItemCheck={(checked) => onItemCheck(sectionName, subSection.name, null, index, checked)}
                />
            ))}

            {/* detailSections가 존재하면 DetailSection을 렌더링 */}
            {subSection.detailSections && subSection.detailSections.map(detailSection => (
                <DetailSection
                    key={detailSection.name}
                    sectionName={sectionName}
                    subSectionName={subSection.name}
                    detailSection={detailSection}
                    onItemCheck={onItemCheck}
                />
            ))}
        </div>
    );
};

export default SubSection;