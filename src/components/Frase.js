import React from 'react';
import styled from '@emotion/styled';

const ContenedorFrase = styled.div`
  padding:2rem;
  border-radius: .5rem;
  background-color:#fff;
  max-width:700px;
  

  @media (min-width:5px){
      margin-top:10rem;
  }

  h1{
      font-family: Arial, Helvetica, sans-serif;
      text-align: center;
      position:relative;
      padding-left: 4rem;

      &::before{
          content: open-quote;
          font-size: 10rem;
          color:black;
          position:absolute;
          left: -1rem;
          top: -2rem;
      }
  }

  p{
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-size: 1rem;
      font-weight: bold;
      text-align: right;
      color: #F56820;
      margin-top:2rem;
  }

`;

const Frace = ({frase}) => {
    return (  
        <ContenedorFrase>
        <h1>{frase.quote}</h1>
        <p>{frase.author}</p>
        </ContenedorFrase>
    );
}
 
export default Frace;