import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Page1.css';

const URL = 'https://pokeapi.co/api/v2/pokemon';

export const Page3 = () => {

    const [pokeData, setPokeData] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(URL);
            const json = await result.json();
            setPokeData(json.results);
        }

        fetchData();
    }, []);

    return (
        <>
            <h1>Pokemon API</h1>
            <div>
                <Link to={'/'}>Home</Link>
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