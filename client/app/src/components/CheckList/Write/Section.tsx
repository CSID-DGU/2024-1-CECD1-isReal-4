import React from 'react';
import { TSection, TCheckListItem, TCategory } from "@/interfaces/checklist/types.ts";
import SubSection from './SubSection';
import * as Styled from "./style.ts"
import H1 from "@/components/Common/Font/Heading/H1";
import ChecklistItem from "@/components/CheckList/Write/CheckListItem.tsx";

/*
interface SectionProps {
    section: TSection;
    onItemCheck: (sectionId: string, subSectionName: string, itemId: string) => void;
}

const Section: React.FC<SectionProps> = ({ section, onItemCheck }) => {
    return (
        <div>
            <Styled.StyledSection>
                <H1 text={section.name} />
            </Styled.StyledSection>
            {Object.keys(section.subSections).map(subSectionName => (
                <React.Fragment key={subSectionName}>
                    <SubSection
                        sectionId={section.id}
                        subSectionName={subSectionName}
                        items={section.subSections[subSectionName]}
                        onItemCheck={onItemCheck}
                    />
                    <hr/>
                </React.Fragment>
            ))}
        </div>
    );
};

 */
interface SectionProps {
    section: TSection;
    onItemCheck: (sectionName: string, subSectionName: string | null, detailSectionName: string | null, checked: boolean) => void;
}

const Section: React.FC<SectionProps> = ({ section, onItemCheck }) => {
    return (
        <div>
            <Styled.StyledSection>
                <H1 text={section.name} />
            </Styled.StyledSection>

            {/* items가 존재하면 렌더링 */}
            {section.items && (
                <ChecklistItem
                    name={section.name}
                    item={section.items}
                    onItemCheck={(checked) => onItemCheck(section.name, null, null, checked)}
                />
            )}

            {/* subSections가 존재하면 SubSection을 렌더링 */}
            {section.subSections && section.subSections.map(subSection => (
                <SubSection
                    key={subSection.name}
                    sectionName={section.name}
                    subSection={subSection}
                    onItemCheck={onItemCheck}
                />
            ))}
        </div>
    );
};

export default Section;