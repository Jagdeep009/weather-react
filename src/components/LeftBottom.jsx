import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import getWeatherInfo from "../assets/getInfo";

export default function LeftBottom({updateInfo}) {

    const [city,setCity] = useState("");

    let handleChange = (e) =>{
        setCity(e.target.value);
    }

    let handleSubmit = async (e) => {
        e.preventDefault();
        setCity("");
        let Info = await getWeatherInfo(city);
        updateInfo(Info);
        console.log(Info)
    }

    return (
        <div className="d-flex justify-content-around mb-10">
            <form onSubmit={handleSubmit}>
                <label htmlFor="city-name">Enter City</label>
                <div>
                <input type='text' id="city-name" required value={city} onChange={handleChange} />
                <button type="submit" className='Search-city-btn'><SearchIcon /></button>
                </div>
                
            </form>
        </div>
    )
}