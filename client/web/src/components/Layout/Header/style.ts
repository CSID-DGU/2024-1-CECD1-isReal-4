import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f0f0f0;
    padding: 0 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
`;

export const Icon = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto; // 아이콘을 오른쪽으로 밀기
    margin-right: 30px;
`;
