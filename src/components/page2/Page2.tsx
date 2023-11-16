import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import './Page2.css';

const URL = 'https://swapi.dev/api/people/';

export const Page2 = () => {

    const [starWarsData, setStarWarsData] = useState<any>();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const fetchData = () => {
        setIsLoading(true);
        axios.get(URL)
            .then(res => res.data)
            .then(res => {
                setStarWarsData(res.results)
                setIsLoading(false);
            })
            .catch(err => alert(err));
    }

    const shouldShowData = starWarsData || isLoading;

    return (
        <>
            <h1>Star Wars API</h1>
            <div>
                <Link to={'/'}>Home Link</Link>
            </div>
            <div>
                <Link to={'/page2.2'}>2.2</Link>
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