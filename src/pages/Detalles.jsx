import characterDescription from "../context/characterDescription"
import { useStore } from 'zustand';
import { useEffect } from "react"
import { useParams } from "react-router-dom";
import React from 'react';
import { Card, Col, Row } from 'antd';

export const Detalles = () => {
    const { Meta } = Card;

    const params = useParams();
    console.log(params);
    // Por medio del params se recibe el ID o parametros

    const { characters } = useStore(characterDescription)
    console.log({characters});
    //Characters es el que recibe toda la información.

    const infoPersonaje = characters.find((parametro) => parametro.id == params?.id);
    console.log(infoPersonaje); 
    
    return(
        <>
    <h1>Detalles de Rick And Morty</h1>   

    <Card
    hoverable
    key={infoPersonaje.id}  //Este onclick permite enrutar por medio del ID
    style={{
        width: 240,
    }}
    cover={<img alt="rick_and_morty" src={infoPersonaje?.image} />}
  >
    <Meta title={infoPersonaje?.name} description={infoPersonaje?.status} />
  </Card>
        </>
    )
}