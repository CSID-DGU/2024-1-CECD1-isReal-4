import * as Styled from "./style.ts";


interface InputFieldProps {
    placeholder: string;
    width?: string;
    borderRadius?: string;
}

export default function SearchInput(props: InputFieldProps) {

    return (
        <Styled.InputFieldContainer>
            <Styled.InputContainer width={props.width} placeholder={props.placeholder} borderRadius={props.borderRadius} />
        </Styled.InputFieldContainer>
    );
}
