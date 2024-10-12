import React, { useState } from 'react';
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
    onItemCheck: (checked: boolean, appendText: string, appendImages: string[]) => void; // 추가 데이터 전달
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
                    // 중복 이미지 방지
                    if (!imagePreviews.includes(base64String)) {
                        setImagePreviews(prev => [...prev, base64String]);
                    }
                };
                reader.readAsDataURL(file);
            });
        }
    };

    const handleFileUploadButtonClick = () => {
        const fileInput = document.getElementById("file-upload") as HTMLInputElement;
        fileInput.click(); // 파일 입력 창을 트리거
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
                        onChange={(e) => onItemCheck(e.target.checked, inputText, imagePreviews)} // 텍스트 및 이미지 상태 전달
                    />
                    {sectionName} {subSectionName} {detailSectionName} {item.description}
                </label>
            </Styled.StyledListItem>

            {/* 항목이 체크된 경우만 textarea와 input 렌더링 */}
            {item.checked && (
                <Column justifyContent={"center"} alignItems={"center"}>
                    <Styled.ActiveTextarea
                        placeholder="항목에 대한 상세 설명을 입력하세요."
                        value={inputText}
                        onChange={handleTextChange}
                    />
                    <Styled.FileUploadButton onClick={handleFileUploadButtonClick}>증명 사진 업로드</Styled.FileUploadButton>
                    <Styled.CustomFileInput id="file-upload" type="file" multiple onChange={handleImageUpload} style={{ display: 'none' }} />
                    {/* 이미지 미리보기 */}
                    <Row>
                        {imagePreviews.map((image, index) => (
                            <>
                                <img
                                    key={index}
                                    src={image}
                                    alt={`업로드된 이미지 ${index + 1}`}
                                    style={{ width: '100px', height: '100px', margin: '10px' }}
                                />
                                <button onClick={() => handleImageRemove(index)}>삭제</button>
                            </>
                        ))}
                    </Row>
                </Column>
            )}
        </Styled.PaddingWrapper>
    );
};

export default ChecklistItem;