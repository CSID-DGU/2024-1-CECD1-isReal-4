import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  background-color: #f8f9fa;
  border-top: 1px solid #dee2e6;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #6c757d;

  & > svg {
    margin-bottom: 5px;
    width: 24px;
    height: 24px;
  }

  &.active {
    color: #007bff;
  }
`;