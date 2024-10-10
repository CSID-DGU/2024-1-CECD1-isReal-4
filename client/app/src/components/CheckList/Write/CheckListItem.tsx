import React, {useState} from 'react';
import {TCheckListItem, TItem} from "@/interfaces/checklist/types.ts";
import * as Styled from "./style"

interface ChecklistItemProps {
    sectionName: string;
    subSectionName: string | null;
    detailSectionName: string | null;
    item: TItem;
    onItemCheck: (checked: boolean) => void;
}

const ChecklistItem: React.FC<ChecklistItemProps> = ({
                                                         sectionName,
                                                         subSectionName,
                                                         detailSectionName,
                                                         item,
                                                         onItemCheck,
                                                     }) => {
    const [inputText, setInputText] = useState<string>(""); // 텍스트 입력 상태
    const [imagePreviews, setImagePreviews] = useState<string[]>([]); // 이미지 미리보기 상태

    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputText(e.target.value); // 텍스트 입력 값 업데이트
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            Array.from(files).forEach(file => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    const base64String = reader.result as string;
                    setImagePreviews(prev => [...prev, base64String]);
                };
                reader.readAsDataURL(file);
            });
        }
    };

    return (
        <div>
            <Styled.StyledListItem>
                <label>
                    <input
                        type="checkbox"
                        checked={item.checked}
                        onChange={(e) => onItemCheck(e.target.checked)}
                    />
                    {item.description}
                </label>
            </Styled.StyledListItem>

            {/* 항목이 체크된 경우만 textarea와 input 렌더링 */}
            {item.checked && (
                <div>
                    <textarea
                        placeholder="상세 설명을 입력하세요."
                        value={inputText}
                        onChange={handleTextChange}
                    />
                    <input type="file" multiple onChange={handleImageUpload} />

                    {/* 이미지 미리보기 */}
                    {imagePreviews.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`업로드된 이미지 ${index + 1}`}
                            style={{ width: '100px', height: '100px', margin: '10px' }}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};
export default ChecklistItem;