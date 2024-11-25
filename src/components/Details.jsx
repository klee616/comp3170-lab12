import { useLocation } from "react-router-dom";

export default function Details( ) {
    const { state } = useLocation();
    console.log(state)
    const displayCapital = (capital) => {
        console.log(capital);
        return capital ? capital.join(',') : '';
    }
    return (<>
        <div>
            <h1>Kingdom of {state.country.name.common}</h1>
            <img src={state.country.flags.svg} alt={state.country.name.common} style={{ height: 200 }} />
            <div><span>Capital :</span><span>{displayCapital(state.country.capital)}</span></div>
            <div><span>Located in :</span><span>{state.country.subregion}</span></div>
        </div>
    </>);
}