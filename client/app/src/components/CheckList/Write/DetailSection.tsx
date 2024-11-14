import React from "react";
import * as Styled from "./style.ts";
import H4 from "@/components/Common/Font/Heading/H4";
import ChecklistItem from "@/components/CheckList/Write/CheckListItem.tsx";
import SizedBox from "@/components/Common/SizedBox";
import {DetailSectionState} from "@/interfaces/checklist/types.ts";

interface DetailSectionProps {
    sectionIndex: number;
    subSectionIndex: number;
    detailSectionIndex: number;
    detailSection: DetailSectionState;
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

export const DetailSection: React.FC<DetailSectionProps> = ({ sectionIndex, subSectionIndex, detailSectionIndex, detailSection, onItemCheck }) => {
    return (
        <div>
            <Styled.StyledDetailSection>
                **<H4 text={detailSection.name} />
            </Styled.StyledDetailSection>

            {Array.isArray(detailSection.items) && detailSection.items.map((item, itemIndex) => (
                <ChecklistItem
                    key={itemIndex}
                    name={detailSection.name}
                    sectionName={null}
                    subSectionName={null}
                    detailSectionName={detailSection.name}
                    sectionIndex={sectionIndex}
                    subSectionIndex={subSectionIndex}
                    detailSectionIndex={detailSectionIndex}
                    item={item}
                    itemIndex={itemIndex}
                    onItemCheck={(checked, appendText, appendImages, description) =>
                        onItemCheck(sectionIndex, subSectionIndex, detailSectionIndex, itemIndex, checked, appendText, appendImages, description)}
                />
            ))}
            <SizedBox height={"20px"} />
        </div>
    );
};