import React from 'react';
import {TCheckListItem, TCategory, TSubSection} from "@/interfaces/checklist/types.ts";
import ChecklistItem from "@/components/CheckList/Write/CheckListItem.tsx";
import * as Styled from "./style.ts"
import H3 from "@/components/Common/Font/Heading/H3";
import {DetailSection} from "@/components/CheckList/Write/DetailSection.tsx";

/*
interface SubSectionProps {
    sectionId: string;
    subSectionName: string;
    items: TCheckListItem[] | TCategory[]; // 수정된 타입 반영
    onItemCheck: (sectionId: string, subSectionName: string, itemId: string) => void;
}

const SubSection: React.FC<SubSectionProps> = ({ sectionId, subSectionName, items, onItemCheck }) => {
    return (
        <div>
            <Styled.StyledSubSection>
                <H3 text={subSectionName} />
            </Styled.StyledSubSection>
            {Array.isArray(items) && items.length > 0 && typeof items[0] === 'object' && 'description' in items[0] ? (
                // TCheckListItem[]인 경우
                (items as TCheckListItem[]).map(item => (
                    <ChecklistItem
                        key={item.id}
                        sectionId={sectionId}
                        subSectionName={subSectionName}
                        item={item}
                        onItemCheck={onItemCheck}
                    />
                ))
            ) : (
                // TCategory[]인 경우
                (items as TCategory[]).map((category, index) => (
                    <div key={index}>
                        <Styled.StyledSubSection>
                        <h4>{category.category}</h4>
                        </Styled.StyledSubSection>
                        {category.items.map(item => (
                            <ChecklistItem
                                key={item.id}
                                sectionId={sectionId}
                                subSectionName={subSectionName}
                                item={item}
                                onItemCheck={onItemCheck}
                            />
                        ))}
                    </div>
                ))
            )}
        </div>
    );
};
*/

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