import * as Styled from "./style.ts";
import FontProps from "@/interfaces/props/FontProps.ts";

interface Sub3Props extends FontProps {
    isActive?: boolean;
}
export default function Sub3(props: Sub3Props) {
    return (
        <Styled.Sub3
            color={props.isActive ? "#007bff" : props.color}
            textAlign={props.textAlign}
        >
            {props.text}
        </Styled.Sub3>
    )
}