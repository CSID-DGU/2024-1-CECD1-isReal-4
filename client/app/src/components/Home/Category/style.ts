import styled from "styled-components";

export const CategoryContainer = styled.div`
  width: 100%;
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CategoryTitle = styled.h2`
  font-size: 18px;
  color: #6c757d;
  margin-bottom: 10px;
`;

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; // 2개의 컬럼으로 나눔
  gap: 20px; // 카드 사이 간격
    padding-top: 10px;
`;

export const CategoryCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out;
    width: 134px;
    height: 124px;
    gap: 10px;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  svg {
    margin-bottom: 30px;
  }

  span {
    font-size: 14px;
    color: #343a40;
  }
`;
