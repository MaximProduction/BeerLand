import InfiniteScroll from 'react-infinite-scroll-component'
import { react, useEffect, useMemo, useState } from 'react';
import './App.css';
import BeerList from './Components/BeerList';
import LazyLoad from 'react-lazy-load'
import styles from './Components/BeerList.module.css'






function App() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [text, setText] = useState('');
    const [isButtonClicked, setIsButtonClicked] = useState(false);

    const handleButtonClick = () => {
        setIsButtonClicked(!isButtonClicked);
    };
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {

        try {
            const response = await fetch('https://api.punkapi.com/v2/beers?page=1');
            const jsonData = await response.json();

            setData(jsonData);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            setIsLoading(false);
        }
    };
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }








    return (

        <div>

            <button onClick={handleButtonClick}>Нажмите на кнопку</button>

            {isButtonClicked ? <textarea
                style={{ width: '600px', resize: 'none', height: '100px' }}
                type="text"
                value={'Текст, который нельзя изменить'}
                readOnly
            /> : null
            }


            <BeerList data={data} />
        </div>


    );

}

export default App;






// {isButtonClicked ? <textarea
//     style={{ width: '1000px' }}
//     type="text"
//     value={isButtonClicked ? text : 'Текст, который нельзя изменить'}
//     readOnly


// /> : null

// }