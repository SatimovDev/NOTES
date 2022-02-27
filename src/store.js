import { createContext,useContext,useState} from "react"

const Store = createContext()

export const useStore = () => useContext(Store)

function StoreProvider({children}){

    const [notes ,  setNotes] = useState([])

    return(
        <Store.Provider value={{
            notes,setNotes
        }}>
            {children}
        </Store.Provider>
    )
}

export default StoreProvider