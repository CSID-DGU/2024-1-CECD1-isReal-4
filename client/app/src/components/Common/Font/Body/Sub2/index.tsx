import * as Styled from "./style.ts";
import FontProps from "@/interfaces/props/FontProps.ts";

export default function Sub2(props: FontProps) {
    return (
        <Styled.Sub2 color={props.color} textAlign={props.textAlign}>{props.text}</Styled.Sub2>
    )
}