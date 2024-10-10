import styled from "styled-components"

export const StyledSection = styled.div`
    border: 1px solid black;
    width: 100vw;
    text-align: center;
`

export const StyledSubSection = styled.div`
    border: 1px solid red;    
    padding-left: 3%;
    
`

export const StyledListItem = styled.div`
    border: 1px solid blue;
    padding-left: 4%;
`

export const StyledDetailSection = styled.div`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 10px;
    background-color: #f9f9f9;

    h4 {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 5px;
    }

    p {
        font-size: 14px;
        color: #666;
        margin-top: 5px;
    }

    img {
        max-width: 100px;
        margin-top: 5px;
        border-radius: 4px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
`;