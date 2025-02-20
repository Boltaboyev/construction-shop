import {createContext} from "react"
import {ShopContextProvider} from "../shopContext"

const MainContext = createContext({})

const MainContextProvider = ({children}) => {
    return (
        <MainContext.Provider>
            <ShopContextProvider>{children}</ShopContextProvider>
        </MainContext.Provider>
    )
}

export {MainContext, MainContextProvider}
