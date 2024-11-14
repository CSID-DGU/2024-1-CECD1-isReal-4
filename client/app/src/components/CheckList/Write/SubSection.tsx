import React from 'react';
import ChecklistItem from "@/components/CheckList/Write/CheckListItem.tsx";
import * as Styled from "./style.ts";
import H3 from "@/components/Common/Font/Heading/H3";
import { DetailSection } from "@/components/CheckList/Write/DetailSection.tsx";
import { SubSectionState } from "@/interfaces/checklist/types.ts";

interface SubSectionProps {
    sectionIndex: number;
    subSectionIndex: number;
    subSectionName: string;
    sectionName: string;
    subSection: SubSectionState;
    onItemCheck: (
        sectionIndex: number,
        subSectionIndex: number | null,
        detailSectionIndex: number | null,
        itemIndex: number,
        checked: boolean,
        appendText: string,
        images: string[],
        description: string
    ) => void;
}

const SubSection: React.FC<SubSectionProps> = ({
                                                   sectionIndex,
                                                   subSectionIndex,
                                                   subSectionName,
                                                   sectionName,
                                                   subSection,
                                                   onItemCheck
                                               }) => {
    return (
        <div>
            <Styled.StyledSubSection>
                *<H3 text={subSection.name} />
            </Styled.StyledSubSection>

            {/* items가 배열인 경우에만 렌더링 */}
            {Array.isArray(subSection.items) && subSection.items.map((item, itemIndex) => (
                <ChecklistItem
                    key={itemIndex}
                    name={subSection.name}
                    sectionName={sectionName}
                    subSectionName={subSection.name}
                    sectionIndex={sectionIndex}
                    subSectionIndex={subSectionIndex}
                    detailSectionName={null}
                    detailSectionIndex={null}
                    itemIndex={itemIndex}
                    item={item}
                    onItemCheck={(checked, appendText, images, description) =>
                        onItemCheck(sectionIndex, subSectionIndex, null, itemIndex, checked, appendText, images, description)}
                />
            ))}

            {/* detailSections가 존재하면 DetailSection을 렌더링 */}
            {subSection.detailSections && subSection.detailSections.map((detailSection, detailSectionIndex) => (
                <DetailSection
                    key={detailSectionIndex}
                    sectionIndex={sectionIndex}
                    subSectionIndex={subSectionIndex}
                    detailSection={detailSection}
                    detailSectionIndex={detailSectionIndex}
                    onItemCheck={onItemCheck}
                />
            ))}
        </div>
    );
};

export default SubSection;