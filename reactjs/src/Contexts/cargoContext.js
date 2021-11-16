import { createContext, useState, useContext } from "react"

const CargoContext = createContext();

export default function CargoProvider({children}){
    const[cargo, setCargo] = useState('')
    console.log()

    return(
        <CargoContext.Provider value={{
            cargo,
            setCargo
        }}>
            {children}
        </CargoContext.Provider>
    )
}

export function useCargo(){
    const context = useContext(CargoContext)
    const {cargo, setCargo} = context;
    return{cargo, setCargo};
}

