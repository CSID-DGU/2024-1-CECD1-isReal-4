import styled from 'styled-components';

export const ListContainer = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const ImagePlaceholder = styled.div`
  width: 40px;
  height: 40px;
  background-color: #f0f0f0;
  border-radius: 4px;
  margin-right: 16px;
`;

export const TextContainer = styled.div`
  flex: 1;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
`;

export const Time = styled.span`
  font-size: 12px;
  color: #888;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #555;
  margin: 0;
`;

export const Comments = styled.div`
  font-size: 12px;
  color: #888;
  margin-top: 8px;
`;