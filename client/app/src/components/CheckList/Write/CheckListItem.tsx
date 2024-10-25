import React, { useState, useEffect } from 'react';
import { ChecklistItemState } from "@/interfaces/checklist/types.ts";
import * as Styled from "./style";
import Column from "@/components/Common/Column";
import Row from "@/components/Common/Row";

interface ChecklistItemProps {
    name: string;
    sectionName: string | null;
    subSectionName: string | null;
    detailSectionName: string | null;
    item: ChecklistItemState;
    itemIndex: number;
    sectionIndex: number;
    subSectionIndex: number | null;
    detailSectionIndex: number | null;
    onItemCheck: (checked: boolean, appendText: string, appendImages: string[], description: string) => void;
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
    const [inputText, setInputText] = useState<string>(item.appendText || "");
    const [imagePreviews, setImagePreviews] = useState<string[]>(item.appendImages || []);
    const [test, setTest] = useState<string>(item.description || "te.");

    useEffect(() => {
        onItemCheck(item.checked, inputText, imagePreviews, test);
    }, [inputText, imagePreviews, item.checked, test]);

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onItemCheck(e.target.checked, inputText, imagePreviews, test);
    };

    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputText(e.target.value);
    };

    const handleTestChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTest(e.target.value);
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
                        onChange={handleCheckboxChange}
                    />
                    {test} {/* 이 부분에서 test 값을 보여줌 */}
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