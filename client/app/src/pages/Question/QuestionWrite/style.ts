import styled from 'styled-components';

export const Container = styled.div`
    padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TextInput = styled.textarea`
  width: 100%;
  min-height: 150px;
    height: 200px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  resize: none;
  box-sizing: border-box;
`;
export const ImageUploadContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

export const ImageUploadLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  min-height: 100px;
  background-color: #f0f0f0;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid #ccc;
`;

export const ImagePreviewContainer = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  max-width: calc(100% - 120px); /* 100%에서 ImageUploadLabel의 너비와 gap을 뺀 값 */
  max-height: 100px; /* 미리보기 컨테이너의 높이를 고정 */
  padding: 5px;

    /* 스크롤 바 숨기기 */
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* Internet Explorer 10+ */

    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera */
    }
`;

export const ImagePreview = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid #ccc;
  flex-shrink: 0; /* 이미지 크기를 고정하여 수평 스크롤 가능하도록 설정 */
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  border: none;
  border-radius: 50px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;