import * as Styled from "./style.ts";
import React from "react";

interface InputFieldProps {
    placeholder: string;
    width?: string;
    borderRadius?: string;
    onChange: (value: string) => void;
}

export default function SearchInput(props: InputFieldProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange(e.target.value);
    };

    return (
        <Styled.InputFieldContainer>
            <Styled.InputContainer
                width={props.width}
                placeholder={props.placeholder}
                borderRadius={props.borderRadius}
                onChange={handleChange}
            />
        </Styled.InputFieldContainer>
    );
}