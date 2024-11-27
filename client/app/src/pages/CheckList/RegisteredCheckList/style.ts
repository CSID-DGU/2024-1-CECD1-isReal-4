import styled, { css } from 'styled-components';
import theme from "@/shared/theme.ts";

export const RegisteredCheckListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
`
// Toggle 버튼을 감싸는 컨테이너 스타일
export const ToggleButtonContainer = styled.div`
  display: flex;
  position: relative;
  border: 1px solid #ddd;
  border-radius: 30px;
  overflow: hidden;
  width: 300px;
  height: 40px; 
`;

// 개별 버튼 스타일
export const Button = styled.button<{ isSelected: boolean }>`
  flex: 1;
  padding: 10px;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  color: #333;
  transition: color 0.3s ease;

  ${({ isSelected }) =>
    isSelected &&
    css`
      font-weight: bold;
      color: ${theme.colorSystem.blue["700"]};
    `}
`;

// 선택된 버튼 밑에 포커스 애니메이션 바 스타일
export const HighlightBar = styled.div<{ selected: string }>`
  position: absolute;
  bottom: 0;
  left: ${({ selected }) => (selected === 'registered' ? '0%' : '50%')};
  width: 50%;
  height: 4px;
  background-color: ${theme.colorSystem.blue["700"]};;
  border-radius: 20px;
  transition: left 0.3s ease;
`;