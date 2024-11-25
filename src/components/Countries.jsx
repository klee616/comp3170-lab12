import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from "react-router-dom";

export default function Countries() {
    const [countries, setCountries] = useState([]);
    const { state } = useLocation();
    const [loadingState, setLoadingState] = useState('idle');
    const onError = loadingState === 'error';
    const onLoading = loadingState === 'loading'
    const navigate = useNavigate();
    const [country, setCountry] = useState(state != null ? state.country.cca2 : "")


    // render kingdoms
    useEffect(() => {
        const URL = 'https://restcountries.com/v3.1/name/kingdom';

        const getCountriesListByAPI = async () => {
            setLoadingState('loading')
            try {
                const response = await fetch(URL);

                if (!response.ok) throw new Error(`Response status: ${response.status}`);

                const json = await response.json();

                setCountries(json);
                setLoadingState('idle')
            } catch (e) {
                console.error(e)
            }
        }

        getCountriesListByAPI(); 

    }, [])


    const handleOnChange = (e) => {
        //navigator("countries/")
        const country = countries.filter(item => item.cca2 == e.target.value)[0]
        navigate(`/country/${e.target.value}`, { state: { country: country } });
    }


    const ErrorHeader = () => {
        return <><h2>Something go wrong</h2></>;
    }
    const Loading = () => {
        return <><h2>Loading</h2></>;
    }
    const Selection = () => {
        return (<>
            <select value={country} onChange={handleOnChange} style={{
                fontSize: "1.2em",
                padding: "0.5em",
                display: "inline-block",
                width: "100%"
            }}>
                <option value="">Select a country</option>
                {
                    countries && countries.map((item, index) => {
                        return <option key={index} value={item.cca2}
                        >{item.name.common}</option>
                    })
                }
            </select>
        </>)
    }
    return (<>
        {
            onError ?
                <ErrorHeader />
                :
                onLoading ?
                    <Loading /> : <Selection />
        }
    </>
    );
}