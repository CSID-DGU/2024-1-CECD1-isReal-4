import React from 'react';
import {TCheckListItem, TCategory, TSubSection} from "@/interfaces/checklist/types.ts";
import ChecklistItem from "@/components/CheckList/Write/CheckListItem.tsx";
import * as Styled from "./style.ts"
import H3 from "@/components/Common/Font/Heading/H3";
import {DetailSection} from "@/components/CheckList/Write/DetailSection.tsx";

interface SubSectionProps {
    sectionName: string;
    subSection: TSubSection;
    onItemCheck: (sectionName: string, subSectionName: string | null, detailSectionName: string | null, checked: boolean) => void;
}

const SubSection: React.FC<SubSectionProps> = ({ sectionName, subSection, onItemCheck }) => {
    return (
        <div>
            <Styled.StyledSubSection>
                <H3 text={subSection.name} />
            </Styled.StyledSubSection>

            {/* items가 존재하면 렌더링 */}
            {subSection.items && (
                <ChecklistItem
                    name={subSection.name}
                    item={subSection.items}
                    onItemCheck={(checked) => onItemCheck(sectionName, subSection.name, null, checked)}
                />
            )}

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