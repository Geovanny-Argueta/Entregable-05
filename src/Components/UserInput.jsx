import React, { useState } from 'react';
import {changeUser} from '../Store/slices/user.slice'
import { useDispatch } from 'react-redux';
import { useNavigate} from 'react-router-dom';
import imagen2 from '../Image/Pokemon-Logo.jpg'


const UserInput = () => {
    const [userName, setUserName] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submit = (e) =>{
        e.preventDefault();
        dispatch(changeUser(userName));
        navigate("/Pokemones")
    }

    return (

            <div className='user_div'>
                
                <form className='user_form'  onSubmit={submit}>
            <input type="text" 
            value={userName}
            onChange={e=>setUserName(e.target.value)}/>
            <button><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>
            </div>
    );
};

export default UserInput;