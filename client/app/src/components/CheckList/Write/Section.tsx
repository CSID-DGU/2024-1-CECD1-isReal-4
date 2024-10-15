import React from 'react';
import { TSection } from "@/interfaces/checklist/types.ts";
import SubSection from './SubSection';
import * as Styled from "./style.ts";
import H1 from "@/components/Common/Font/Heading/H1";
import ChecklistItem from "@/components/CheckList/Write/CheckListItem.tsx";

interface SectionProps {
    section: TSection;
    sectionIndex: number;
    onItemCheck: (sectionIndex: number, subSectionIndex: number | null, detailSectionIndex: number | null, itemIndex: number, checked: boolean) => void;
}

const Section: React.FC<SectionProps> = ({ section, sectionIndex, onItemCheck }) => {
    return (
        <Styled.PaddingWrapper>
            <Styled.StyledSection>
                <H1 text={section.name} />
            </Styled.StyledSection>

            {/* items가 존재하면 렌더링 */}
            {Array.isArray(section.items) && section.items.map((item, itemIndex) => (
                <ChecklistItem
                    key={itemIndex}
                    name={section.name}
                    sectionName={section.name}
                    sectionIndex={sectionIndex}  // 섹션 인덱스 전달
                    subSectionName={null}
                    detailSectionName={null}
                    item={item}
                    onItemCheck={(checked) => onItemCheck(sectionIndex, null, null, itemIndex, checked)}  // 인덱스 전달
                />
            ))}

            {/* subSections가 존재하면 SubSection을 렌더링 */}
            {section.subSections && section.subSections.map((subSection, subSectionIndex) => (
                <SubSection
                    key={subSectionIndex}
                    subSectionName={subSection.name}
                    sectionName={section.name}
                    sectionIndex={sectionIndex}  // 섹션 인덱스 전달
                    subSectionIndex={subSectionIndex}  // 서브 섹션 인덱스 전달
                    subSection={subSection}
                    onItemCheck={onItemCheck}
                />
            ))}
        </Styled.PaddingWrapper>
    );
};

export default Section;