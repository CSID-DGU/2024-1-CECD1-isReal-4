import React, { useState } from 'react';
import * as Styled from "./style.ts"
import Title from "@/components/Title";
import H1 from "@/components/Common/Font/Heading/H1";
import H3 from "@/components/Common/Font/Heading/H3";
import theme from "@/shared/theme.ts";

const QuestionWrite: React.FC = () => {
    const [text, setText] = useState<string>('');
    const [images, setImages] = useState<File[]>([]);

    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImages([...images, ...Array.from(e.target.files)]);
        }
        console.log(images)
    };

    return (
        <>
        <Title title={"질문 작성하기"}/>

        <Styled.Container>
            <Styled.TextInput
                placeholder="질문 내용을 입력해주세요."
                value={text}
                onChange={handleTextChange}
            />
            <Styled.ImageUploadContainer>
                <Styled.ImageUploadLabel>
                    <H1 text={"+"} color={"#666"}/>
                    <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleImageUpload}
                        style={{ display: 'none' }}
                    />
                </Styled.ImageUploadLabel>
                <Styled.ImagePreviewContainer>
                    {images.map((image, index) => (
                        <Styled.ImagePreview key={index} src={URL.createObjectURL(image)} alt={`preview-${index}`} />
                    ))}
                </Styled.ImagePreviewContainer>
            </Styled.ImageUploadContainer>
            <Styled.SubmitButton>
                <H3 text={"질문 등록하기"} color={theme.colorSystem.white}/>
            </Styled.SubmitButton>
        </Styled.Container>
        </>
    );
};

export default QuestionWrite;
