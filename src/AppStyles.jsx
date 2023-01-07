import styled from "styled-components";
import background_image from '../src/assets/images/background.svg';
export const AppContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 2rem;
    background-color: #1b2542;
    background-image: url(${background_image});
    background-size: cover;
    background-position: center;
    @media (max-width:768px) {
        height: 1000px;
    }
    @media (max-height:768px) {
        height: 900px;
    }
`;