import styled from 'styled-components';


export const Container = styled.div`
  padding: 20px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const DetailTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;

export const Time = styled.span`
  font-size: 12px;
  color: #888;
`;

export const Description = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
`;

export const ImageContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

export const AnswersSection = styled.div`
  margin-top: 20px;
`;

export const SectionTitle = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const CommentInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-top: 10px;
  box-sizing: border-box;
`;