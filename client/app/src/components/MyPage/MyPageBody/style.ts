import styled from "styled-components";

export const Container = styled.div`
    padding-top: 10px;
    width: 100%;
    position: relative;
    justify-content: center;
    align-items: center;

    -ms-overflow-style: none; // IE and Edge
    scrollbar-width: none; // Firefox
    &::-webkit-scrollbar {
        display: none; // Chrome, Safari, Opera
    }
`;

export const UserSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const LineWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
`;

export const HorizontalLine = styled.div`
    flex-grow: 1;
    height: 1px;
    background-color: #ddd;
`;

export const UserImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    margin-bottom: 20px;
`;

export const ImageLabel = styled.label`
    cursor: pointer;
    margin-bottom: 20px;
`;

export const UserImage = styled.div`
    position: relative;
    width: 125px;
    height: 125px;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid #ddd;
    cursor: pointer;
`;

export const ProfileImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const ChangeText = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 10px 0;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    text-align: center;
    font-size: 14px;
    opacity: 0.8;
    cursor: pointer;

    label {
        cursor: pointer;
        color: inherit;
        text-decoration: none;
    }
`;

export const FileInput = styled.input`
    display: none;
`;

export const UserText = styled.div`
    margin: 5px;
`;

export const UserLabel = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const InfoSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const ApartNameSection = styled.div`
    margin-top: 20px;
    width: 90%;
    margin-bottom: 80px;
`;

export const UploadButton = styled.button`
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    border: none;
    padding: 5px 10px 5px 10px;
    border-radius: 8px;
    cursor: pointer;
`;

export const Label = styled.div`
    font-size: 14px;
    color: black;
    margin-bottom: 10px;
    margin-left: 5px;
`;

export const LabelWithLine = styled.div`
    font-size: 14px;
    color: #666;
    margin-bottom: 10px;
    position: relative;
    padding-bottom: 8px;

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #ddd;
    }
`;

export const CommonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid black;
    border-radius: 8px;
    padding: 15px;
    position: relative;
`;

export const CommonWrapperNoBorder = styled(CommonWrapper)`
    border: none;
    padding: 0px;
`;

export const CommonWrapperColumn = styled(CommonWrapperNoBorder)`
    margin-top: 15px;
    flex-direction: column;
    align-items: start;
`;

export const ApartNameWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
`;

export const ApartNameText = styled.div<{ isUploaded: boolean }>`
    font-size: ${(props) => (props.isUploaded ? "16px" : "12px")};
    font-weight: ${(props) => (props.isUploaded ? "bold" : "normal")};
    color: black;
`;

export const DefectSection = styled.div`
    width: 90%;
    margin-bottom: 80px;
`;

export const DefectInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const CountLabel = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: black;
`;

export const DefectButton = styled.button`
    background-color: #4a4a4a;
    color: white;
    border-radius: 20px;
    padding: 5px 15px;
    font-size: 14px;
    cursor: pointer;
    border: none;
    margin-left: 10px;

    &:hover {
        background-color: #333;
    }
`;

export const QnASection = styled.div`
    width: 90%;
    margin-bottom: 60px;
`;

export const QnAWrapper = styled.div`
    max-height: 200px;
    overflow-y: auto;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 5px 10px 5px 10px;
    width: 95%;
    margin-top: 15px;

    -ms-overflow-style: none; // IE and Edge
    scrollbar-width: none; // Firefox
    &::-webkit-scrollbar {
        display: none; // Chrome, Safari, Opera
    }
`;

export const QnAItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid #ddd;
    cursor: pointer;

    &:hover {
        background-color: #f0f0f0;
    }

    &:last-child {
        border-bottom: none;
    }
`;

export const QnATitle = styled.div`
    font-size: 16px;
    font-weight: bold;
`;

export const QnAComments = styled.div`
    font-size: 12px;
    color: #999;
`;

export const LogoutSection = styled.div`
    display: flex;
    margin-bottom: 80px;
    justify-content: center;
    align-items: center;
`;

export const LogoutButton = styled.button`
    background-color: #4a4a4a;
    color: white;
    border-radius: 20px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border: none;

    &:hover {
        background-color: #333;
    }
`;

export const RuleDescriptionContainer = styled.div`
    padding: 20px;
    background-color: white;
    width: 90%;
`;

export const SectionHeader = styled.label`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
`;

export const ToggleButton = styled.button`
    margin-left: auto;
    background: none;
    border: none;
    font-size: 14px;
    cursor: pointer;
`;

export const TermsContainer = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
    cursor: pointer;
`;

export const TermsContent = styled.div`
    margin-top: 10px;
    font-size: 14px;
    line-height: 1.5;
    color: #555;
`;

export const CompleteButton = styled.button`
    width: 90%;
    height: 50px;
    font-size: 16px;
    color: ${({ disabled }) => (disabled ? "#aaa" : "#fff")};
    background-color: ${({ disabled }) => (disabled ? "#ddd" : "#50555C")};
    border: none;
    border-radius: 5px;
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
    transition: background-color 0.3s, color 0.3s, opacity 0.3s;

    &:hover {
        background-color: ${({ disabled }) => (disabled ? "#ddd" : "#ccc")};
    }
`;
