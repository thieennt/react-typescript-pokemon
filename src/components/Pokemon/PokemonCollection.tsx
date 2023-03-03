import React from "react";
import { Pokemon, PokemonDetail } from "../../interface";
import PokemonList from "./PokemonList";
import "./pokemon.css";
import { Detail } from "../../App";

interface Props {
  pokemons: PokemonDetail[];
  viewDetail: Detail;
  setViewDetail: React.Dispatch<React.SetStateAction<Detail>>;
}

const PokemonCollection: React.FC<Props> = (props) => {
  const { pokemons, viewDetail, setViewDetail } = props;
  const selectPokemon = (id: number) => {
    if (!viewDetail.isOpened) {
      setViewDetail({
        id: id,
        isOpened: true,
      });
    }
  };
  return (
    <section
      className={
        viewDetail.isOpened
          ? "collection-container-active"
          : "collection-container"
      }
    >
      {viewDetail.isOpened ? <div className="overlay"></div> : <></>}
      {pokemons.map((pokemon, index) => (
        <div key={index} onClick={() => selectPokemon(pokemon.id)}>
          <PokemonList
            name={pokemon.name}
            id={pokemon.id}
            image={pokemon.sprites.front_default}
            abilities={pokemon.abilities}
            viewDetail={viewDetail}
            setViewDetail={setViewDetail}
          />
        </div>
      ))}
    </section>
  );
};

export default PokemonCollection;
