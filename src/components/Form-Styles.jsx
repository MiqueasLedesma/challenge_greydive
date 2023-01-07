import styled from "styled-components";

export const FormContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #353851;
    padding-bottom: 5rem;
    padding-top: 5rem;
    align-items: center;
    @media (max-width:768px) {
        padding-bottom: 0;
        padding-top: 0;
    }
    form {
        border-radius: 25px;
        @media (max-width:768px) {
            width: 100%;
            padding-inline-end: 2.5rem;
            padding-inline-start: 2.5rem;
            gap: 3rem;
        }
        opacity: 0.8;
        background-color: white;
        width: 45%;
        height: fit-content;
        padding-top: 1rem;
        padding-bottom: 1rem;
        padding-inline-end: 5rem;
        padding-inline-start: 5rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        .title {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            h2 {
                user-select: none;
                font-size: 26px;
                color: #666;
                font-weight: normal;
            }
        }
        .text {
            display: flex;
            flex-direction: column;
            gap: .5rem;
            label {
                user-select: none;
                font-size: 16px;
                color: #666;
                font-weight: normal;
            }
            input{
                background-color: transparent;
                border: none;
                border-bottom: 1px solid #ccc;
                outline: none;
                width: 100%;
                font-size: 16px;
                color: #666;
                padding: 10px 0;
            }
        }
        .email {
            display: flex;
            flex-direction: column;
            gap: .5rem;
            label {
                user-select: none;
                font-size: 16px;
                color: #666;
                font-weight: normal;
            }
            input {
                background-color: transparent;
                border: none;
                border-bottom: 1px solid #ccc;
                outline: none;
                width: 100%;
                font-size: 16px;
                color: #666;
                padding: 10px 0;
            }
        }
        .date {
            display: flex;
            flex-direction: column;
            label {
                user-select: none;
                font-size: 16px;
                color: #666;
                font-weight: normal;
            }
            input {
                background-color: transparent;
                border: none;
                border-bottom: 1px solid #ccc;
                outline: none;
                width: 100%;
                font-size: 16px;
                color: #666;
                padding: 10px 0;
            }
        }
        .select {
            label {
                user-select: none;
                font-size: 16px;
                color: #666;
                font-weight: normal;
            }
            select {
                background-color: transparent;
                border: none;
                outline: none;
                width: 100%;
                font-size: 16px;
                color: #666;
                padding: 10px 0;
                appearance: none;
            }
        }
        .checkbox{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            label {
                user-select: none;
                font-size: 16px;
                color: #666;
                font-weight: normal;
                margin-left: 10px;
                cursor: pointer;
            }
            input[type="checkbox"] {
                appearance: none;
                outline: none;
                box-shadow: none;
                border: 1px solid #ccc;
                width: 16px;
                height: 16px;
                border-radius: 3px;
                position: relative;
                cursor: pointer;
                transition: 0.2s ease all;
            }
            input[type="checkbox"]:checked {
                border-color: #666;
                background-color: #666;
            }
        }
    }
`;