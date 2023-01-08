import React from 'react';
import { SpinnerContainer } from './Spinner-styles';

export const Spinner = ({ size, border, color }) => {
    return (
        <SpinnerContainer size={size} border={border} color={color}>
        </SpinnerContainer>
    )
}