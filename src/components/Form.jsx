import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { nombre } from '../App';
import { formRender } from '../utils/CreateForm';
import { saveMessage } from '../utils/SendForm';
import { FormContainer } from './Form-Styles';


export function Form({ items }) {
    const navigate = useNavigate();
    const [state, setState] = useState({});
    const handleSubmit = e => {
        e.preventDefault();
        saveMessage(state)
            .then(r => {
                Swal.fire(r)
                .then(res => navigate(`/success?id=${r}`) )
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
                    items && formRender({items, state, handleChange})
                }
            </form>
        </FormContainer>
    );
}