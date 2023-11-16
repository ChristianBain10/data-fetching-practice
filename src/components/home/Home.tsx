import { Link } from "react-router-dom"
import useUpdateLogger from "../../hooks/useUpdateLogger"
import useLocalStorage from "../../hooks/useLocalStorage";

export const Home = () => {

    const [value, setValue] = useLocalStorage('key', 'chad');
    useUpdateLogger(value);

    return (
        <>
            <h1>HOME PAGE</h1>
            <div>
                <Link to={'/page1'}>Page 1 Link</Link>
            </div>
            <div>
                <Link to={'/page2'}>Page 2 Link</Link>
            </div>
            <p>{value}</p>
            <button onClick={() => setValue('megamind')}>Change value</button>
        </>
    )
}