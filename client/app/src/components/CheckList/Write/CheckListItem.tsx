import React, { useState, useEffect } from 'react';
import { TItem } from "@/interfaces/checklist/types.ts";
import * as Styled from "./style";
import Column from "@/components/Common/Column";
import Row from "@/components/Common/Row";

interface ChecklistItemProps {
    name: string;
    sectionName: string;
    subSectionName: string | null;
    detailSectionName: string | null;
    item: TItem;
    itemIndex: number;  // item의 인덱스 전달
    sectionIndex: number;
    subSectionIndex: number | null;
    detailSectionIndex: number | null;
    onItemCheck: (checked: boolean, appendText: string, appendImages: string[]) => void;
}

const ChecklistItem: React.FC<ChecklistItemProps> = ({
                                                         sectionName,
                                                         subSectionName,
                                                         detailSectionName,
                                                         item,
                                                         itemIndex,
                                                         sectionIndex,
                                                         subSectionIndex,
                                                         detailSectionIndex,
                                                         onItemCheck
                                                     }) => {
    const [inputText, setInputText] = useState<string>(item.appendText || ""); // 상태를 초기화할 때 item의 값을 사용
    const [imagePreviews, setImagePreviews] = useState<string[]>(item.images || []); // 상태 초기화

    // useEffect로 상태가 변경될 때마다 onItemCheck를 호출해 상태를 전달
    useEffect(() => {
        onItemCheck(item.checked, inputText, imagePreviews);
    }, [inputText, imagePreviews, item.checked]);

    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputText(e.target.value);
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            Array.from(files).forEach(file => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    const base64String = reader.result as string;
                    if (!imagePreviews.includes(base64String)) {
                        setImagePreviews(prev => [...prev, base64String]);
                    }
                };
                reader.readAsDataURL(file);
            });
        }
    };

    const handleFileUploadButtonClick = () => {
        const fileInput = document.getElementById(`file-upload-${item.description}`) as HTMLInputElement;
        fileInput.click();
    };

    const handleImageRemove = (index: number) => {
        setImagePreviews(prev => prev.filter((_, i) => i !== index));
    };

    return (
        <Styled.PaddingWrapper>
            <Styled.StyledListItem>
                <label>
                    <input
                        type="checkbox"
                        checked={item.checked}
                        onChange={(e) => {
                            onItemCheck(e.target.checked, inputText, imagePreviews);
                        }}
                    />
                    {sectionName} {subSectionName} {detailSectionName} {item.description}
                </label>
            </Styled.StyledListItem>

            {item.checked && (
                <Column justifyContent={"center"} alignItems={"center"}>
                    <Styled.ActiveTextarea
                        placeholder="상세 설명을 입력하세요."
                        value={inputText}
                        onChange={handleTextChange}
                    />
                    <Styled.FileUploadButton onClick={handleFileUploadButtonClick}>
                        증명 사진 업로드
                    </Styled.FileUploadButton>
                    <Styled.CustomFileInput
                        id={`file-upload-${item.description}`}
                        type="file"
                        multiple
                        onChange={handleImageUpload}
                        style={{ display: 'none' }}
                    />
                    <Row>
                        {imagePreviews.map((image, index) => (
                            <div key={index}>
                                <img
                                    src={image}
                                    alt={`업로드된 이미지 ${index + 1}`}
                                    style={{ width: '100px', height: '100px', margin: '10px' }}
                                />
                                <button onClick={() => handleImageRemove(index)}>삭제</button>
                            </div>
                        ))}
                    </Row>
                </Column>
            )}
        </Styled.PaddingWrapper>
    );
};

export default ChecklistItem;