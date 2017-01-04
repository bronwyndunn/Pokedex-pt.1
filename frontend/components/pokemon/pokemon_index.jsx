import React from 'react';

class PokemonIndex extends React.Component {

  componentDidMount(){
    this.props.requestAllPokemon();
  }

  render () {
    const pokemonList = this.props.pokemon.map((poke) => {
      return (
        <li key={poke.id}>{poke.name}<img src={poke.image_url}/></li>
      );
    });

    return (
      <ul>
        {pokemonList}
      </ul>
    );
  }
}

export default PokemonIndex;
