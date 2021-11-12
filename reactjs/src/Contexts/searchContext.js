import { createContext, useState, useContext } from "react"

const ListContext = createContext();

export default function ListProvider({children}){
    const[list, setList] = useState(true)
    console.log()

    return(
        <ListContext.Provider value={{
            list,
            setList
        }}>
            {children}
        </ListContext.Provider>
    )
}

export function useList(){
    const context = useContext(ListContext)
    const {list, setList} = context;
    return{list, setList};
}

