import React from "react";
import * as Styled from "./style.ts";
import { TDetailSection } from "@/interfaces/checklist/types.ts";
import H4 from "@/components/Common/Font/Heading/H4";
import ChecklistItem from "@/components/CheckList/Write/CheckListItem.tsx";
import SizedBox from "@/components/Common/SizedBox";

interface DetailSectionProps {
    sectionIndex: number;
    subSectionIndex: number;
    detailSectionIndex: number;
    detailSection: TDetailSection;
    onItemCheck: (sectionIndex: number, subSectionIndex: number, detailSectionIndex: number, itemIndex: number, checked: boolean, appendText: string, appendImages: string[]) => void;
}

export const DetailSection: React.FC<DetailSectionProps> = ({ sectionIndex, subSectionIndex, detailSectionIndex, detailSection, onItemCheck }) => {
    return (
        <div>
            <Styled.StyledDetailSection>
                <H4 text={detailSection.name} />
            </Styled.StyledDetailSection>

            {/* items가 배열이므로 map으로 순회하며 ChecklistItem을 렌더링 */}
            {Array.isArray(detailSection.items) && detailSection.items.map((item, itemIndex) => (
                <ChecklistItem
                    key={itemIndex}  // 각 아이템에 고유 key 부여
                    name={detailSection.name}
                    sectionName={null}  // 필요 없는 값 null로 전달
                    subSectionName={null}  // 필요 없는 값 null로 전달
                    detailSectionName={detailSection.name}
                    sectionIndex={sectionIndex}
                    subSectionIndex={subSectionIndex}
                    detailSectionIndex={detailSectionIndex}
                    item={item}
                    itemIndex={itemIndex}  // itemIndex 전달
                    onItemCheck={(checked, appendText, appendImages) =>
                        onItemCheck(sectionIndex, subSectionIndex, detailSectionIndex, itemIndex, checked, appendText, appendImages)}  // 필요한 값 전달
                />
            ))}
            <SizedBox height={"20px"} />
        </div>
    );
};