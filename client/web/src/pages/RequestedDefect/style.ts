import styled from "styled-components";

export const PageContainer = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    margin-top: 50px;
    margin-bottom: 80px;
`;

export const ContentArea = styled.div`
    display: flex;
    flex: 1;
    margin-top: 50px;
    margin-left: 350px;
    margin-right: 50px;
`;

export const MainContent = styled.main`
    flex: 1;
    padding: 20px;
    background-color: #fff;
`;

export const SearchContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
`;

export const SearchInput = styled.input`
    width: 300px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

export const DefectTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;

    th,
    td {
        padding: 15px;
        border-bottom: 1px solid #ddd;
        text-align: left;
        font-size: 18px;
    }

    button {
        padding: 8px 16px;
        background-color: #666;
        color: white;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    button:hover {
        background-color: #777;
    }
`;
