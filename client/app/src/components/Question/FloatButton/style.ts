
import styled from "styled-components";

export const ButtonContainer = styled.div`
  position: fixed;
  bottom: 90px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
`;

export const Button = styled.button`
  background-color: #f0f0f0;
  color: #333;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 24px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  position: relative;

  &:hover {
    background-color: #e0e0e0;
  }
`;

// export const NotificationBadge = styled.span`
//   background-color: #ff3b30;
//   color: white;
//   font-size: 14px;
//   font-weight: bold;
//   width: 24px;
//   height: 24px;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-left: 8px;
//   position: absolute;
//   right: -12px;
//   top: -12px;
// `;