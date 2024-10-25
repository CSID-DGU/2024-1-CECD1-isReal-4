import React, { useState, useEffect } from 'react';
import Section from "@/components/CheckList/Write/Section.tsx";
import Title from "@/components/Title";
import Column from "@/components/Common/Column";
import * as Styled from "./style";
import Sub2 from "@/components/Common/Font/Body/Sub2";
import H4 from "@/components/Common/Font/Heading/H4";
import SizedBox from "@/components/Common/SizedBox";
import { initialChecklist } from "@/interfaces/checklist/data.ts";
import { useChecklistStore} from "@/stores/useChecklistStore.ts";
import {createChecklist} from "@/apis/checklist";
import {useNavigate} from "react-router-dom";


const WriteChecklist: React.FC = () => {
    const { sections, initializeChecklist, setChecklistItem, getChecklistData } = useChecklistStore();
    const [addedText, setAddedText] = useState<string>("");
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        initializeChecklist(initialChecklist.sections);
        console.log("초기 데이터: ", initialChecklist);
        console.log("초기 데이터 섹션:", initialChecklist.sections);
    }, [initializeChecklist]);

    const onItemCheck = (
        sectionIndex: number,
        subSectionIndex: number | null,
        detailSectionIndex: number | null,
        itemIndex: number,
        checked: boolean,
        appendText: string,
        images: string[],
        description: string
    ) => {
        const updatedItem = { checked, appendText, appendImages: images, description };
        setChecklistItem(sectionIndex, subSectionIndex, detailSectionIndex, itemIndex, updatedItem);
        console.log("onItemCheck description: ", description);

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

    /*
    체크리스트 전체를 아우르는 추가 설명, 이미지 입력 코드였는데, 설계 사항이 바뀐 관계로 삭제한 코드입니다.
    추후 재사용 가능성을 염두에 두고 남겨두었습니다.
     */
    const overallAddInformation = () => {
        return (
            <>
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
            파일 업로드 input
            <Styled.FileUploadButton htmlFor="file-upload">사진 추가하기</Styled.FileUploadButton>
            <Styled.CustomFileInput id="file-upload" type="file" multiple onChange={handleImageUpload} />
        </>
        )
    }


    const handleCreateChecklist = async () => {
        const response = await createChecklist();
        if(response) {
            alert("체크리스트가 정상적으로 작성되었습니다.");
            navigate("/home");
        } else {
            alert("체크리스트 작성에서 문제가 발생했습니다.");
        }
    }

    return (
        <Styled.CheckListPageWrapper>
            <Column alignItems={"center"} justifyContent={"center"}>
                <Title title="체크리스트 작성하기" />
                {sections.map((section, sectionIndex) => (
                    <Section
                        key={sectionIndex}
                        section={section}
                        sectionIndex={sectionIndex}
                        onItemCheck={onItemCheck}
                    />
                ))}

                <SizedBox height={"40px"} />

                <Styled.RegisterButton onClick={handleCreateChecklist}>
                    <H4 text={"등록하기"} />
                </Styled.RegisterButton>
            </Column>
        </Styled.CheckListPageWrapper>
    );
};

export default WriteChecklist;