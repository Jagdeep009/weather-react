import { useEffect, useState } from "react";
import Left from "./Left";
import Right from "./Right";
import getWeatherInfo from "./assets/getInfo";

export default function Weather() {

    const [info,setInfo] = useState({});

    let updateInfo = (newinfo) =>{
        setInfo(newinfo);
    }

    useEffect(()=> {
        getWeatherInfo("jaipur")
        .then((result)=>{
            setInfo(result);
        })
    },[])

    return (
        <div className="d-flex Weather flex-md-row flex-column">
            <Left updateInfo={updateInfo} info={info} />
            <Right info={info} />
        </div>
    )
}