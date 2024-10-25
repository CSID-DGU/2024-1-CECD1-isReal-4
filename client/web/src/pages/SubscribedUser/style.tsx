import styled from "styled-components";

export const PageContainer = styled.div`
    padding: 20px;
    margin-top: 80px;
    margin-left: 350px;
    margin-right: 50px;
`;

export const ContentArea = styled.div`
    display: flex;
    flex: 1;
`;

export const MainContent = styled.div`
    flex: 1;
    padding: 20px;
    min-height: 100vh;
`;

export const TotalCount = styled.div`
    display: flex;
    justify-content: flex-start;
    font-size: 20px;
    font-weight: bold;
`;

export const FilterAndSearchContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 10px;
`;

export const SearchContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const SearchInput = styled.input`
    padding: 10px;
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
`;

export const UserTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;

    th,
    td {
        padding: 20px 15px;
        border-bottom: 1px solid #e0e0e0;
        text-align: left;
        font-size: 18px;
    }

    tbody tr:hover {
        background-color: #f9f9f9;
    }

    tr:last-child td {
        border-bottom: none;
    }
`;
