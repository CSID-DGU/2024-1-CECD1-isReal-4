import React, { useState, useEffect } from 'react';
import Section from "@/components/CheckList/Write/Section.tsx";
import Title from "@/components/Title";
import Column from "@/components/Common/Column";
import * as Styled from "./style";
import Sub2 from "@/components/Common/Font/Body/Sub2";
import H4 from "@/components/Common/Font/Heading/H4";
import SizedBox from "@/components/Common/SizedBox";
import { initialChecklist } from "@/interfaces/checklist/data.ts";
import { useChecklistStore } from "@/stores/useChecklistStore.ts";

const WriteChecklist: React.FC = () => {
    const { sections, initializeChecklist, setChecklistItem, getChecklistData } = useChecklistStore();
    const [addedText, setAddedText] = useState<string>("");
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);

    useEffect(() => {
        // 초기 데이터로 체크리스트를 Zustand에 로드
        initializeChecklist(initialChecklist.sections);
    }, [initializeChecklist]);

    const onItemCheck = (
        sectionIndex: number,
        subSectionIndex: number | null,
        detailSectionIndex: number | null,
        itemIndex: number,
        checked: boolean,
        appendText: string,
        images: string[]
    ) => {
        // 업데이트할 항목의 데이터를 체크, 텍스트, 이미지 포함하여 전달
        const updatedItem = { checked, appendText, images };
        setChecklistItem(sectionIndex, subSectionIndex, detailSectionIndex, itemIndex, updatedItem);
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
                };
                reader.readAsDataURL(file);
            });
        }
    };

    // 텍스트 변경 핸들러
    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setAddedText(e.target.value);
    };

    const handleSubmit = () => {
        const checklistData = getChecklistData();
        console.log('서버로 보낼 데이터:', checklistData);
        // 서버로 데이터 전송 로직 (예: axios 사용)
    };

    return (
        <Styled.CheckListPageWrapper>
            <Column alignItems={"center"} justifyContent={"center"}>
                <Title title="체크리스트 작성하기" />
                {sections.map((section, sectionIndex) => (
                    <Section
                        key={sectionIndex}
                        section={section}
                        sectionIndex={sectionIndex}
                        onItemCheck={onItemCheck}  // onItemCheck 함수를 전달
                    />
                ))}

                <SizedBox height={"20px"} />
                <Column alignItems={"center"} justifyContent={"space-between"}>
                    <Styled.AddTextArea
                        placeholder={"전체적으로 추가 내용을 입력해주세요."}
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
                <Styled.RegisterButton onClick={handleSubmit}>
                    <H4 text={"등록하기"} />
                </Styled.RegisterButton>
            </Column>
        </Styled.CheckListPageWrapper>
    );
};

export default WriteChecklist;