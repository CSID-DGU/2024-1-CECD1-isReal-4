import React from "react";
import * as Styled from "./style.ts"
import {TDetailSection} from "@/interfaces/checklist/types.ts";
import H4 from "@/components/Common/Font/Heading/H4";
import ChecklistItem from "@/components/CheckList/Write/CheckListItem.tsx";

interface DetailSectionProps {
    sectionName: string;
    subSectionName: string;
    detailSection: TDetailSection;
    onItemCheck: (sectionName: string, subSectionName: string, detailSectionName: string, checked: boolean) => void;
}

export const DetailSection: React.FC<DetailSectionProps> = ({ sectionName, subSectionName, detailSection, onItemCheck }) => {
    return (
        <div>
            <Styled.StyledDetailSection>
                <H4 text={detailSection.name} />
            </Styled.StyledDetailSection>

            {/* items가 존재하면 렌더링 */}
            {detailSection.items && (
                <ChecklistItem
                    name={detailSection.name}
                    item={detailSection.items}
                    onItemCheck={(checked) => onItemCheck(sectionName, subSectionName, detailSection.name, checked)}
                />
            )}
        </div>
    );
};