import { useEffect, useState } from "react";
import axios from "axios";
import {RickAndMortyURL} from '../Const.js';
import { Card } from 'antd';
import { useNavigate } from "react-router-dom";
import { create } from 'zustand';
import { useStore } from 'zustand';
import characterDescription from "../context/characterDescription.jsx";


export const RickAndMorty = () => {


    // El uso store sirve para setear en el método los personajes. (Se vuelve global)
    const { updateCharacters } = useStore(characterDescription)
    const navigate = useNavigate()
    const [buttonValue, setButton] = useState(6);
    const { Meta } = Card;
    const [characters, setCharacters] = useState([]); // Se usa para almacenar y utilizar el array
    // Characters: Variable - SetCharacters: Función en la cuál llena la variable.

    const infoCharacter = (id) => {
        navigate("/info/"+id);
    }

    // Sirve para consumir la API (con axios) y disparar la función (solo una vez).
    useEffect(() => {
        axios({
            method: 'get',  //tipo de peticion, get, post, etc 
            url: RickAndMortyURL
        })
            .then(function (response) {
                console.log(response?.data.results)
                setCharacters(response?.data.results) // Se setea el personaje..
                updateCharacters(response?.data.results)  //Estamos cargando a la variable global
            });

    },[buttonValue]); // Se ejecuta una sola vez, porque no hay parametro.



    return(
        <>
    <h1>Rick And Morty</h1> 
    {/* Itera el characters, para poder tener los personajes */}

    <button onClick={() => setButton(buttonValue+1)}>Buscar</button>
    <button onClick={() => setCharacters([])}>Borrar</button>
    {characters.map((character) =>
    <Card
    hoverable
    key={character.id}
    onClick={() => infoCharacter(character.id)} //Este onclick permite enrutar por medio del ID
    style={{
        width: 240,
    }}
    cover={<img alt="rick_and_morty" src={character?.image} />}
  >
    <Meta title={character?.name} description={character?.status} />
  </Card>
)}
         
        </>
    )
}