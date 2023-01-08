import React, { useState } from 'react';
import { toast } from "react-toastify"
import { useNavigate } from 'react-router-dom';
import { formRender } from '../utils/CreateForm';
import { saveMessage } from '../utils/SendForm';
import { FormContainer } from './Form-Styles';

export function Form({ items }) {
    const navigate = useNavigate();
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(false);
    const handleSubmit = e => {
        setLoading(!loading);
        setState({
            ...state,
            terms_and_conditions: false
        });
        e.preventDefault();
        saveMessage(state)
            .then(r => {
                toast.success('Exito!')
                navigate(`/success?id=${r}`)
            })
    };
    const handleChange = e => {
        if (e.target.name === "terms_and_conditions") {
            if (!state[e.target.name]) return setState({
                ...state,
                [e.target.name]: true
            })
            else {
                return setState({
                    ...state,
                    [e.target.name]: false
                })
            }
        }
        return setState({
            ...state,
            [e.target.name]: e.target.value
        })
    };

    return (
        <FormContainer>
            <form onSubmit={handleSubmit}>
                <div className='title'>
                    <h2>Completa el formulario</h2>
                </div>
                {
                    items && formRender({ items, state, handleChange })
                }
                {
                    loading && <div className='box'><h5>Enviando su formulario...</h5></div>
                }
            </form>
        </FormContainer>
    );
}