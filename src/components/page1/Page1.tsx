import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Page1.css';

const URL = 'https://pokeapi.co/api/v2/pokemon';

export const Page1 = () => {

    const [pokeData, setPokeData] = useState<any[]>([]);

    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(res => setPokeData(res.results))
            .catch(err => alert(err));
    }, []);

    return (
        <>
            <h1>Pokemon API</h1>
            <div>
                <Link to={'/'}>Home</Link>
            </div>
            <div>
                <Link to={'/page1.2'}>1.2</Link>
            </div>
            <div className='pokemon-container'>
                {pokeData &&
                    <>
                        {pokeData.map((pokemon, index) => {
                            return <p key={pokemon.name}>{index + 1} - {pokemon.name}</p>
                        })}
                    </>
                }
            </div>
        </>
    )
}