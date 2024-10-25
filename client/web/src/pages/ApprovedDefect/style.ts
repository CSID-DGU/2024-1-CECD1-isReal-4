import styled from "styled-components";

export const PageContainer = styled.div`
    padding: 20px;
    margin-top: 100px;
    margin-left: 350px;
    margin-right: 50px;
`;

export const SearchContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 10px;
`;

export const SearchInput = styled.input`
    width: 300px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 15px;

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
