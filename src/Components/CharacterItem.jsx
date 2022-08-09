import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CharacterItem = ({url}) => {
    
    const[details, setDetails] = useState({});
    const navegate = useNavigate();

    useEffect(()=>{
        axios
        .get(url)
        .then(res=>setDetails(res.data))
    },[])


    return (
        <div className='character'>
            <section onClick={() => navegate( `/Pokemones/${details.id}` )}>
            <div >Name: <b>{details.name}</b></div>
            <div><img src={details.sprites?.front_default} /></div>
        </section>
        </div>
    );
};

export default CharacterItem;