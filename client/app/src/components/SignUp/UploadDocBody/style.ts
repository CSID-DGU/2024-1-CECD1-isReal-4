import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    padding-bottom: 70px;
`;

export const UploadContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 90%;
    margin-bottom: 25px;
`;

export const Label = styled.label`
    margin-bottom: 10px;
    font-size: 14px;
    color: #333;
`;

export const UploadWrapper = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #f9f9f9;
    width: 100%;
    height: 30px;
    max-width: 400px;
    cursor: pointer;
`;

export const Input = styled.input`
    width: 100%;
    display: none;
`;

export const InputLabel = styled.label`
    width: 100%;
    font-size: 16px;
    color: #888;
    cursor: pointer;
    padding-left: 10px;
    padding-top: 5px;
`;

export const Description = styled.p`
    margin-top: 10px;
    font-size: 12px;
    color: #777;
    line-height: 1.5;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 20px;
`;

export const RuleDescriptionContainer = styled.div`
    padding: 20px;
    background-color: white;
    width: 90%;
`;

export const CheckboxWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const Checkbox = styled.input`
    margin-top: 5px;
    margin-right: 10px;
`;

export const AgreeHeader = styled.label`
    font-size: 14px;
    font-weight: bold;
    text-decoration: underline;
    color: black;
    margin-top: 15px;
    margin-bottom: 10px;
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
