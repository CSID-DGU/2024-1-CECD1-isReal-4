import React, { useState } from 'react';
import {TSection, TCheckListItem, TCategory, TChecklist} from "@/interfaces/checklist/types.ts";
import Section from "@/components/CheckList/Write/Section.tsx";
import { initialChecklist } from "@/interfaces/checklist/data.ts";
import Title from "@/components/Title";
import Column from "@/components/Common/Column";
import * as Styled from "./style";
import Sub2 from "@/components/Common/Font/Body/Sub2";
import H4 from "@/components/Common/Font/Heading/H4";

const WriteChecklist: React.FC = () => {
    const [checklist, setChecklist] = useState<TChecklist>(initialChecklist);
    const [addedText, setAddedText] = useState<string>("");
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);
    const [images, setImages] = useState<string[]>([]);

    // 체크 상태 업데이트 함수
    const onItemCheck = (
        sectionName: string,
        subSectionName: string | null,
        detailSectionName: string | null,
        checked: boolean
    ) => {
        setChecklist(prevChecklist => ({
            ...prevChecklist,
            sections: prevChecklist.sections.map(section => {
                if (section.name === sectionName) {
                    if (subSectionName && section.subSections) {
                        return {
                            ...section,
                            subSections: section.subSections.map(subSection => {
                                if (subSection.name === subSectionName) {
                                    if (detailSectionName && subSection.detailSections) {
                                        return {
                                            ...subSection,
                                            detailSections: subSection.detailSections.map(detailSection => {
                                                if (detailSection.name === detailSectionName) {
                                                    return {
                                                        ...detailSection,
                                                        items: detailSection.items
                                                            ? { ...detailSection.items, checked: checked }
                                                            : null
                                                    };
                                                }
                                                return detailSection;
                                            })
                                        };
                                    }
                                    return {
                                        ...subSection,
                                        items: subSection.items
                                            ? { ...subSection.items, checked: checked }
                                            : null
                                    };
                                }
                                return subSection;
                            })
                        };
                    }
                    return {
                        ...section,
                        items: section.items
                            ? { ...section.items, checked: checked }
                            : null
                    };
                }
                return section;
            })
        }));
    };

    // 이미지 업로드, 미리보기 설정
    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            Array.from(files).forEach(file => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    const base64String = reader.result as string;
                    setImagePreviews(prev => [...prev, base64String]);
                    setImages(prev => [...prev, base64String]);
                };
                reader.readAsDataURL(file);
            });
        }
    };

    // 텍스트 변경 핸들러
    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setAddedText(e.target.value);
    };

    return (
        <Column alignItems={"center"} justifyContent={"center"}>
            <Title title="체크리스트 작성하기" />
            {checklist.sections.map((section, sectionIndex) => (
                <Section key={sectionIndex} section={section} onItemCheck={onItemCheck} />
            ))}
            <Column alignItems={"center"} justifyContent={"space-between"}>
                <Styled.AddTextArea
                    placeholder={"추가 내용을 입력해주세요."}
                    value={addedText}
                    onChange={handleTextChange}
                />
                <Styled.AddTextButton>
                    <Sub2 text={"내용 추가하기"} />
                </Styled.AddTextButton>
            </Column>
            <div>
                {imagePreviews.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`${index}번째 이미지 미리보기`}
                        style={{ width: '100px', height: '100px', margin: '10px' }}
                    />
                ))}
            </div>
            {/* 파일 업로드 input */}
            <Styled.FileUploadButton htmlFor="file-upload">사진 추가하기</Styled.FileUploadButton>
            <Styled.CustomFileInput id="file-upload" type="file" multiple onChange={handleImageUpload} />
            <Styled.RegisterButton>
                <H4 text={"등록하기"} />
            </Styled.RegisterButton>
        </Column>
    );
};

export default WriteChecklist;