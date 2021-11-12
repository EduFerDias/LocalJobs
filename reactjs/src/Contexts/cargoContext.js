import { createContext, useState, useContext } from "react"

const CargoContext = createContext();

export default function CargoProvider({children}){
    const[Cargo, setCargo] = useState([])
    console.log()

    return(
        <CargoContext.Provider value={{
            Cargo,
            setCargo
        }}>
            {children}
        </CargoContext.Provider>
    )
}

export function useCargo(){
    const context = useContext(CargoContext)
    const {Cargo, setCargo} = context;
    return{Cargo, setCargo};
}

