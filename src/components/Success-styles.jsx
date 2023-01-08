import styled from "styled-components";

export const SuccessContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .box {
        @media (max-width:768px) {
            width: 100%;
            height: 60%;
        }
        padding: 2rem;
        display: flex;
        height: fit-content;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        opacity: 0.7;
        border-radius: 25px;
        flex-direction: column;
        width: 60%;
        gap: 1.5rem;
        h3 {
            color: #666;
        }
        ul {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            li {
                color: #666;
                list-style: none;
            }
        }
        button {
            width: 150px;
            background-color: #666;
            border-radius: 15px;
            border: none;
            outline: none;
            color: #fff;
            font-size: 16px;
            padding: 10px 20px;
            cursor: pointer;
            transition: 0.2s ease all;
            &:hover {
                background-color: #555;
            }
        }
    }
`;