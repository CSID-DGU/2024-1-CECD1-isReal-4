import React from "react";
import * as Styled from "./style.ts";

interface SizedBoxProps {
    width?: string;
    height?: string;
    children?: React.ReactNode;

}

export default function SizedBox(props: SizedBoxProps) {

    return (
        <Styled.SizedBox height={props.height} width={props.width}>{props.children}</Styled.SizedBox>
    );
}