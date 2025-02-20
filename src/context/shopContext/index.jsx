import {createContext, useReducer} from "react"

const ShopContext = createContext({})

const ShopContextProvider = ({children}) => {
    const initialState = {
        shop: JSON.parse(localStorage.getItem("shop")) || [],
        like: JSON.parse(localStorage.getItem("like")) || [],
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case "add":
                if (
                    state.shop.find((value) => value.id === action.product.id)
                ) {
                    let newDate = state.shop.map((value) =>
                        value.id === action.product.id
                            ? {...value, counter: value.counter + 1}
                            : value
                    )
                    localStorage.setItem("shop", JSON.stringify(newDate))
                    return {...state, shop: newDate}
                }
                let newDate = {
                    ...state,
                    shop: [...state.shop, {...action.product, counter: 1}],
                }
                localStorage.setItem("shop", JSON.stringify(newDate.shop))
                return newDate

            case "delete":
                let deletedData = state.shop.filter(
                    (value) => value.id !== action.deletedId
                )
                localStorage.setItem("shop", JSON.stringify(deletedData))
                return {...state, shop: deletedData}

            case "increment":
                let incData = state.shop.map((value) =>
                    value.id === action.productId
                        ? {...value, counter: value.counter + 1}
                        : value
                )
                localStorage.setItem("shop", JSON.stringify(incData))
                return {...state, shop: incData}

            case "decrement":
                let decData = state.shop.map((value) =>
                    value.id === action.productId && value.counter > 1
                        ? {...value, counter: value.counter - 1}
                        : value
                )
                localStorage.setItem("shop", JSON.stringify(decData))
                return {...state, shop: decData}

            case "like":
                if (
                    state.like.find((value) => value.id === action.product.id)
                ) {
                    let likedData = state.like.map((value) =>
                        value.id === action.product.id
                            ? {...value, counter: value.counter + 1}
                            : value
                    )
                    localStorage.setItem("like", JSON.stringify(likedData))
                    return {...state, like: likedData}
                }
                let likedData = {
                    ...state,
                    like: [...state.like, {...action.product, counter: 1}],
                }
                localStorage.setItem("like", JSON.stringify(likedData.like))
                return likedData
            case "disLike":
                let disLikedData = state.like.filter(
                    (value) => value.id !== action.deletedId
                )
                localStorage.setItem("like", JSON.stringify(disLikedData))
                return {...state, like: disLikedData}

            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <ShopContext.Provider value={{state, dispatch}}>
            {children}
        </ShopContext.Provider>
    )
}

export {ShopContextProvider, ShopContext}
