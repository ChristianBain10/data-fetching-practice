import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import './Page2.css';

const URL = 'https://swapi.dev/api/people/';

export const Page4 = () => {

    const [starWarsData, setStarWarsData] = useState<any>();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const fetchData = async () => {
        setIsLoading(true);
        const response = await axios.get(URL);
        const json = await response.data;
        setStarWarsData(json.results);
        setIsLoading(false);
    }

    const shouldShowData = starWarsData || isLoading;

    return (
        <>
            <h1>Star Wars API</h1>
            <div>
                <Link to={'/'}>Home Link</Link>
            </div>
            {shouldShowData ?
                <div className='star-wars-container'>
                    {!isLoading
                        ? <>
                            {starWarsData.map((character: any, index: number) => {
                                return <p key={character.name}>{index + 1} - {character.name}</p>
                            })}
                            <button onClick={() => setStarWarsData(null)}>Clear Data</button>
                        </>  
                        : <p>Loading...</p>
                    }
                </div>
                :
                <button onClick={fetchData}>Fetch Data</button>
            }
        </>
    )
}