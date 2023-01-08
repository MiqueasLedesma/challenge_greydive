
import styled, { keyframes } from "styled-components";

const spin = keyframes`
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
`;

export const SpinnerContainer = styled.div`
    border: ${props => props.border ? props.border + 'px' : '4px'} solid rgb(0,0,0,.1);
    width: ${props => props.size ? props.size + 'px' : '36px'};
    height: ${props => props.size ? props.size + 'px' : '36px'};
    border-radius: 50%;
    border-left-color: ${props => props.color ? props.color : '#09f'};
    animation-name: ${spin};
    animation: ${spin} 1s ease infinite;
`;