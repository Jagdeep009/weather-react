import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import getWeatherInfo from "../assets/getInfo";
import useInfo from '../Context/InfoContext';

export default function LeftBottom() {

    const {updateInfo} = useInfo()

    const [city,setCity] = useState("");
    const [error,setError] = useState(false);

    let handleChange = (e) =>{
        setCity(e.target.value);
    }

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let Info = await getWeatherInfo(city);
            updateInfo(Info);
            setError(false);
            console.log(Info)
        }
        catch {
            setError(true);
            setTimeout(()=>{
                setError(false);
            },2000)
        }
        setCity("");
    }

    return (
        <div className="d-flex align-items-center mb-10 flex-column">
            <form onSubmit={handleSubmit}>
                <label htmlFor="city-name">Enter City</label>
                <div>
                <input type='text' id="city-name" required value={city} onChange={handleChange} />
                <button type="submit" className='Search-city-btn'><SearchIcon /></button>
                </div>
            </form>
            {error && <p className='text-danger mt-xl-5 mt-3 mb-0' style={{fontSize: "18px"}}>City not present in our Database</p>}
        </div>
    )
}