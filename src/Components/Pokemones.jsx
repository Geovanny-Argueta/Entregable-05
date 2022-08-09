import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CharacterItem from "./CharacterItem";
import { useNavigate } from "react-router-dom";

const Pokemones = () => {
  const user = useSelector((state) => state.user);

  const [pokemons, setPokemons] = useState([]);
  const [searchs, setSearchs] = useState("");
  const [types, setTypes] = useState([]);
  const navegate = useNavigate();

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => setPokemons(res.data.results));

    axios
      .get(`https://pokeapi.co/api/v2/type/`)
      .then((res) => setTypes(res.data.results));
  }, []);

  console.log(types);

  const search = (e) => {
    e.preventDefault();
    navegate(`/Pokemones/${searchs}`);
  };

  const filter = (e) => {
    alert("Seleccionado "+e.target.value);
    axios
    .get(e.target.value)
    .then(res => setPokemons(res.data.pokemon))
  };

  console.log(pokemons)

  return (
    <div className="pokemon">
      <h1>Pokemons</h1>
      <p>Welcome {user}</p>

      <form className="form" onSubmit={search}>
        <input
          type="text"
          value={searchs}
          onChange={(e) => setSearchs(e.target.value)}
        />
        <button>Search</button>
      </form>

     <select onChange={filter}>
      <option value="">Select one Type</option>
      {
        types.map((type) =>(
          <option value={type.url} key={type.url}>
            {type.name}
          </option>
        ))
      }
     </select>

      <ul>
        {pokemons.map((pokemon) => (
          <CharacterItem 
          key={pokemon.url ? pokemon.url : pokemon.pokemon.url}
          url={pokemon.url ? pokemon.url : pokemon.pokemon.url} />
        ))}
      </ul>
    </div>
  );
};

export default Pokemones;
