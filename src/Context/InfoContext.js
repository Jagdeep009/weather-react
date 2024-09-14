import {createContext, useContext} from "react";

export const InfoContext = createContext({
    info: {},
    setInfo: ()=>{},
    updateInfo: ()=>{},
})

export const InfoContextProvider = InfoContext.Provider;

export default function useInfo(){
    return useContext(InfoContext);
}