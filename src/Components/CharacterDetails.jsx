import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CharacterDetails = () => {

    const[character, setCharacter] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res=>setCharacter(res.data))
    },[id])


    return (
        <div className='details'>
            <h1>{character.name}</h1>
            <img src={character.sprites?.front_default}  />
            <div>Species: <b>{character.species?.name}</b></div>
        </div>
    );
};

export default CharacterDetails;<h1>Details</h1>