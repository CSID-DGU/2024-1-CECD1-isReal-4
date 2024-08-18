import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    width: auto;
    height: 50px;
    //padding-top: 20px; // 상태 바를 위한 여유 공간
    background-color: #fff;
    position: relative;
    border-bottom: 1px solid #ddd;
    padding: 8px 12px;
`
export const CenterTitleContainer = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 18px;
    font-weight: bold;
    `