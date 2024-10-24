import styled from "styled-components";

export const SidebarContainer = styled.aside`
    width: 250px;
    height: 100vh;
    background-color: #f9f9f9;
    padding: 20px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: fixed;
    left: 0;
    top: 0;
`;

export const Logo = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 20px;
    margin-left: 10px;
`;

export const MenuList = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

export const MenuItem = styled.div`
    padding: 20px 0;
    cursor: pointer;
    font-size: 16px;
    display: flex;
    align-items: center;
    width: 110%;
    margin-bottom: 10px;
    font-size: larger;

    &:hover {
        background-color: #e0e0e0;
    }
`;

export const MenuIcon = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 10px;
    margin-left: 10px;
`;
