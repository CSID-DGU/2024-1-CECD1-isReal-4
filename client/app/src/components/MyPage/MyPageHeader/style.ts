import styled from "styled-components";

export const Container = styled.div`
    padding-top: 10px;
    width: 100%;
    height: 7vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    -ms-overflow-style: none; // IE and Edge
    scrollbar-width: none; // Firefox
    &::-webkit-scrollbar {
        display: none; // Chrome, Safari, Opera
    }
`;

export const LeftButton = styled.div`
    position: absolute;
    left: 30px;
`;

export const RightButton = styled.div`
    position: absolute;
    right: 30px;
`;
