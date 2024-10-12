import React from 'react';
import { TSection } from "@/interfaces/checklist/types.ts";
import SubSection from './SubSection';
import * as Styled from "./style.ts";
import H1 from "@/components/Common/Font/Heading/H1";
import ChecklistItem from "@/components/CheckList/Write/CheckListItem.tsx";

interface SectionProps {
    section: TSection;
    onItemCheck: (sectionName: string, subSectionName: string | null, detailSectionName: string | null, itemIndex: number, checked: boolean) => void;
}

const Section: React.FC<SectionProps> = ({ section, onItemCheck }) => {
    return (
        <Styled.PaddingWrapper>
            <Styled.StyledSection>
                <H1 text={section.name} />
            </Styled.StyledSection>

            {/* items가 존재하면 렌더링 */}
            {Array.isArray(section.items) && section.items.map((item, index) => (
                <ChecklistItem
                    key={index}  // 고유한 key 설정
                    name={section.name}
                    sectionName={section.name}  // sectionName 전달
                    subSectionName={null}  // subSection이 없으므로 null 전달
                    detailSectionName={null}  // detailSection이 없으므로 null 전달
                    item={item}
                    onItemCheck={(checked) => onItemCheck(section.name, null, null, index, checked)}  // itemIndex 전달
                />
            ))}

            {/* subSections가 존재하면 SubSection을 렌더링 */}
            {section.subSections && section.subSections.map(subSection => (
                <SubSection
                    subSectionName={subSection.name}
                    sectionName={section.name}
                    subSection={subSection}
                    onItemCheck={onItemCheck}
                />
            ))}
        </Styled.PaddingWrapper>
    );
};

export default Section;