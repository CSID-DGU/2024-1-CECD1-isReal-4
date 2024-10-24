import styled from "styled-components";
import {SvgButtonProps} from "@/interfaces/props/SvgButtonProps.ts";

export const SvgButton = styled.button<SvgButtonProps>`
    background-image: url(${(props) => props.src});
    background-size: cover;
    width: ${(props) => props.width || "16px"};
    height: ${(props) => props.height || "16px"};
    background-color: ${(props) => props.color || "transparent"};
    margin-top: ${(props) => props.marginTop || "0"};
    margin-right: ${(props) => props.marginRight || "0"};
    margin-bottom: ${(props) => props.marginBottom || "0"};
    margin-left: ${(props) => props.marginLeft || "0"};
    border: none;
`;