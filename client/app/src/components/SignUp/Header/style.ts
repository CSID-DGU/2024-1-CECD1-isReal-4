import styled from "styled-components";

export const Container = styled.div`
    padding-top: 10px;
    width: 100%;
    height: 7vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LeftButton = styled.div`
    position: absolute;
    left: 20px;
`;

export const RightButton = styled.div`
    position: absolute;
    right: 20px;
    margin-top: 10px;
`;

export const Button = styled.button`
    color: black;
    cursor: pointer;
    border: none;
    background: none;
    margin-top: -2px;
`;
