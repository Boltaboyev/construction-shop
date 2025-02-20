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
                const existingProduct = state.shop.find(
                    (value) => value.id === action.product.id
                )

                let updatedShop
                if (existingProduct) {
                    updatedShop = state.shop.map((value) =>
                        value.id === action.product.id
                            ? {...value, counter: value.counter + 1}
                            : value
                    )
                } else {
                    updatedShop = [
                        ...state.shop,
                        {...action.product, counter: 1},
                    ]
                }

                localStorage.setItem("shop", JSON.stringify(updatedShop))
                return {...state, shop: updatedShop}

            case "delete":
                const updatedShopAfterDelete = state.shop.filter(
                    (value) => value.id !== action.deletedId
                )
                localStorage.setItem(
                    "shop",
                    JSON.stringify(updatedShopAfterDelete)
                )
                return {...state, shop: updatedShopAfterDelete}

            case "increment":
                const incData = state.shop.map((value) =>
                    value.id === action.productId
                        ? {...value, counter: value.counter + 1}
                        : value
                )
                localStorage.setItem("shop", JSON.stringify(incData))
                return {...state, shop: incData}

            case "decrement":
                const decData = state.shop.map((value) =>
                    value.id === action.productId && value.counter > 1
                        ? {...value, counter: value.counter - 1}
                        : value
                )
                localStorage.setItem("shop", JSON.stringify(decData))
                return {...state, shop: decData}

            case "like":
                const isLiked = state.like.some(
                    (item) => item.id === action.product.id
                )
                const updatedLikes = isLiked
                    ? state.like.filter((item) => item.id !== action.product.id)
                    : [...state.like, action.product]

                localStorage.setItem("like", JSON.stringify(updatedLikes))
                return {...state, like: updatedLikes}

            case "disLike":
                const updatedLikesAfterRemove = state.like.filter(
                    (item) => item.id !== action.deletedId
                )
                localStorage.setItem(
                    "like",
                    JSON.stringify(updatedLikesAfterRemove)
                )
                return {...state, like: updatedLikesAfterRemove}

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
