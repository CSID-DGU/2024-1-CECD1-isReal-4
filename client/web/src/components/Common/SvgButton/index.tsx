import * as Styled from "./style";
import {SvgButtonProps} from "@/interfaces/props/SvgButtonProps.ts";

export default function SvgButton(props: SvgButtonProps) {
    return (
        <Styled.SvgButton src={props.src} width={props.width} height={props.height} color={props.color} marginTop={props.marginTop}
                          marginRight={props.marginRight} marginBottom={props.marginBottom} marginLeft={props.marginLeft} onClick={props.onClick}/>
    )
}