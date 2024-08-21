import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const Header = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: white;
    padding-bottom: 10px;
`;

export const Body = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
`;
