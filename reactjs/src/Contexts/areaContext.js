import { createContext, useState, useContext } from "react"

const areaContext = createContext();

export default function AreaProvider({children}){
    const[area, setArea] = useState([])
    console.log()

    return(
        <areaContext.Provider value={{
            area,
            setArea
        }}>
            {children}
        </areaContext.Provider>
    )
}

export function useArea(){
    const context = useContext(areaContext)
    const {area, setArea} = context;
    return{area, setArea};
}

