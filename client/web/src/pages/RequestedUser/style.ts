import styled from "styled-components";

export const StatusText = styled.span<{ status: string }>`
    color: ${({ status }) => (status === "승인" ? "green" : status === "거절" ? "red" : "black")};
`;

export const PageContainer = styled.div`
    padding: 20px;
    margin-top: 80px;
    margin-left: 350px;
    margin-right: 50px;
`;

export const ContentArea = styled.div`
    display: flex;
`;

export const MainContent = styled.div`
    flex: 1;
    padding: 20px;
`;

export const FilterAndSearchContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

export const FilterButtons = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-bottom: 20px;
    margin-top: 20px;
`;

export const FilterButton = styled.button<{ active: boolean }>`
    margin-right: 10px;
    padding: 10px 20px;
    background-color: ${({ active }) => (active ? "#444" : "#e0e0e0")};
    color: ${({ active }) => (active ? "white" : "black")};
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #444;
        color: white;
    }
`;

export const SearchContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
`;

export const SearchInput = styled.input`
    width: 300px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

export const UserTable = styled.table`
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
