import * as Styled from "./style.ts";
import React from "react";

interface InputFieldProps {
    placeholder: string;
    width?: string;
    borderRadius?: string;
    onChange: (value: string) => void; // 수정: 문자열을 받는 onChange
}

export default function SearchInput(props: InputFieldProps) {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange(e.target.value); // 문자열만 전달
    };

    return (
        <Styled.InputFieldContainer>
            <Styled.InputContainer
                width={props.width}
                placeholder={props.placeholder}
                borderRadius={props.borderRadius}
                onChange={handleInputChange} // 수정: 내부 핸들러 사용
            />
        </Styled.InputFieldContainer>
    );
}