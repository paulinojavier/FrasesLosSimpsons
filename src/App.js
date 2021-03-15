import React,{useState, useEffect} from 'react';
import logo from './logo.svg';
import styled from '@emotion/styled';
import Frase from './components/Frase';

const Contenedor = styled.div`
 display: flex;
 align-items: center;
 padding-top: 5rem;
 flex-direction: column;
`;

const Boton = styled.button`
 background-color:#33E3FF;
 background-size: 300px;
 font-family: 'Courier New', Courier, monospace;
 color:#fff;
 margin-top: 3rem;
 padding: 1rem 3rem;
 font-size: 2rem;
 border: 2px solid black;
 transition: background-size.8s ease;

  :hover{
    cursor: pointer;
    background-size:400px;
    background-color:#33BBFF;
  }
`;

function App() {

  //Staeta de frases
  const [frase, guardarFrase] = useState({});



  const consultarAPI = async ()=>{
    const api =await fetch('https://los-simpsons-quotes.herokuapp.com/v1/quotes');
    const frase = await api.json()
    guardarFrase(frase[0]);
    
  }

  //cargar una frase
  useEffect(()=>{
    consultarAPI()
  },[]);


  return (
      
    <Contenedor>
      <Frase
         frase={frase}
      />
       <Boton
         onClick={consultarAPI}
       >
         Obtener frase
       </Boton>
    </Contenedor>
    
  );
}

export default App;
