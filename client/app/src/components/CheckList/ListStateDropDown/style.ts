
// 스타일드 컴포넌트 정의
import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
  width: 200px;
`;

export const DropdownButton = styled.button`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
  cursor: pointer;
  text-align: left;

  &:hover {
    background-color: #e9e9e9;
  }
`;

export const DropdownMenu = styled.ul`
  position: absolute;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  z-index: 10;
`;

export const DropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #e9e9e9;
  }
`;