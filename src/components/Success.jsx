import React, { useEffect, useState } from 'react'
import { SuccessContainer } from './Success-styles'
import { useNavigate, useSearchParams } from "react-router-dom";
import { getInfoFromFB } from '../utils/GetInfoFromFB';
import { Spinner } from './Spinner';

export const Success = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("id");
  const [state, setState] = useState(false);

  useEffect(() => {
    getInfoFromFB(query)
      .then(r => {
        if(r === "!document") return navigate('/');
        setState(r)
      })
  }, [query, navigate]);

  return (
    <SuccessContainer>
      {state ? 
      <>
        <div className="box">
          <h3>Solicitud Exitosa se han guardado estos datos:</h3>
          <ul>
            <li>Nombre del documento: {query}</li>
            <li>Nombre completo: {state.full_name}</li>
            <li>Pais de origen: {state.country_of_origin}</li>
            <li>Email: {state.email}</li>
            <li>Fecha de nacimiento: {state.birth_date}</li>
          </ul>
          <button onClick={() => navigate('/')}>Volver al inicio</button>
        </div>
      </>:
      <Spinner size={150} border={15}/>
      }
    </SuccessContainer>
  )
}
