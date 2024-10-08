import * as Styled from "./style.ts";
import FontProps from "@/interfaces/props/FontProps.ts";

export default function H2(props: FontProps) {
    return (
        <Styled.H2 color={props.color} textAlign={props.text}>{props.text}</Styled.H2>
    )
}