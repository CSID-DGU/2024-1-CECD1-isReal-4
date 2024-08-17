import styled from "styled-components";
import theme from "@/shared/theme.ts";

export const AptTitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 360px;
    height: 40px;
    margin-top: 20px;
    border-bottom: 2px solid ${theme.colorSystem.black}
`;
