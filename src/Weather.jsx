import { useEffect, useState } from "react";
import Left from "./Left";
import Right from "./Right";
import getWeatherInfo from "./assets/getInfo";
import { InfoContextProvider } from "./Context/InfoContext";

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
        <InfoContextProvider value={{info,setInfo,updateInfo}}>
            <div className="d-flex Weather flex-md-row flex-column">
                <Left />
                <Right/>
            </div>
        </InfoContextProvider>
    )
}