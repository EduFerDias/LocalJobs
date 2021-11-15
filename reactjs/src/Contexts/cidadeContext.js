import { createContext, useState, useContext } from "react"

const cidadeContext = createContext();

export default function CidadeProvider({children}){
    const[Cidade, setCidade] = useState('')
    console.log()

    return(
        <cidadeContext.Provider value={{
            cidade: Cidade,
            setCidade: setCidade
        }}>
            {children}
        </cidadeContext.Provider>
    )
}

export function useCidade(){
    const context = useContext(cidadeContext)
    const {cidade, setCidade} = context;
    return{cidade, setCidade};
}

