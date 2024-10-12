import React from "react";
import * as Styled from "./style.ts";
import { TDetailSection } from "@/interfaces/checklist/types.ts";
import H4 from "@/components/Common/Font/Heading/H4";
import ChecklistItem from "@/components/CheckList/Write/CheckListItem.tsx";
import SizedBox from "@/components/Common/SizedBox";

interface DetailSectionProps {
    sectionName: string;
    subSectionName: string;
    detailSection: TDetailSection;
    onItemCheck: (sectionName: string, subSectionName: string, detailSectionName: string, itemIndex: number, checked: boolean) => void;
}

export const DetailSection: React.FC<DetailSectionProps> = ({ sectionName, subSectionName, detailSection, onItemCheck }) => {
    return (
        <div>
            <Styled.StyledDetailSection>
                <H4 text={detailSection.name} />
            </Styled.StyledDetailSection>

            {/* items가 배열이므로 map으로 순회하며 ChecklistItem을 렌더링 */}
            {Array.isArray(detailSection.items) && detailSection.items.map((item, index) => (
                <ChecklistItem
                    key={index}  // 인덱스를 사용, 그러나 고유성이 보장되지 않음
                    name={detailSection.name}
                    sectionName={sectionName}
                    subSectionName={subSectionName}
                    detailSectionName={detailSection.name}
                    item={item}
                    onItemCheck={(checked) => onItemCheck(sectionName, subSectionName, detailSection.name, index, checked)}
                />
            ))}
            <SizedBox height={"20px"} />
        </div>
    );
};