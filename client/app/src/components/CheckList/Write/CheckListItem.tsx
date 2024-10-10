import React from 'react';
import {TCheckListItem, TItem} from "@/interfaces/checklist/types.ts";
import * as Styled from "./style"

/*
interface ChecklistItemProps {
    sectionId: string;
    subSectionName: string;
    item: TCheckListItem;
    onItemCheck: (sectionId: string, subSectionName: string, itemId: string) => void;
}

const ChecklistItem: React.FC<ChecklistItemProps> = ({ sectionId, subSectionName, item, onItemCheck }) => {
    return (
        <Styled.StyledListItem>
            <label>
                <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => {
                        console.log(`Checkbox clicked: sectionId=${sectionId}, subSectionName=${subSectionName}, itemId=${item.id}`);
                        onItemCheck(sectionId, subSectionName, item.id);
                    }}
                />
                {item.description}
            </label>
        </Styled.StyledListItem>
    );
};

 */

interface ChecklistItemProps {
    name: string;
    item: TItem;
    onItemCheck: (checked: boolean) => void;
}

const ChecklistItem: React.FC<ChecklistItemProps> = ({ name, item, onItemCheck }) => {
    return (
        <Styled.StyledListItem>
            <label>
                <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={(e) => onItemCheck(e.target.checked)}
                />
                {item.description}
                {item.appendText && <p>{item.appendText}</p>}
                {item.appendImages && item.appendImages.map((image, index) => (
                    <img key={index} src={image} alt={`추가 이미지 ${index}`} />
                ))}
            </label>
        </Styled.StyledListItem>
    );
};

export default ChecklistItem;