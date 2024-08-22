import * as Styled from "./style";
import React from "react";

interface RowProps {
    children: React.ReactNode;
    justifyContent?: string;
    alignItems?: string;
    padding?: string;
}

export default function Row(props: RowProps) {
    return (
        <Styled.Row justifyContent={props.justifyContent} alignItems={props.alignItems} padding={props.padding}>
            {props.children}
        </Styled.Row>
    )
}