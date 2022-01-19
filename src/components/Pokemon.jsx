import react, {useState} from 'react';

const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);
    const [err, setErr] = useState("")

    const fetchPokemonThen = (e) => {
        e.preventDefault();
        fetch('https://pokeapi.co/api/v2/pokemon?offset=1&limit=807')
        .then(response =>  response.json())
        .then(response=>setPokemon(response.results))
        
        .catch(err=> {
            console.log(err)
        })
    }


    return (
        <div>
            <div>
                <h2> Fetch All Pokemon</h2>
                <button onClick={fetchPokemonThen}>Fetch Pokemon</button>
                
                <ul>
                {pokemon.map((pokemon, i) => {
                    return (
                        <li key={i} >{pokemon.name}</li>
                    )
                })}
                </ul>
            </div>
        </div>
    )
};

export default Pokemon;
