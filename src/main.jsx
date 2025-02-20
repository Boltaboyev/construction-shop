import {StrictMode} from "react"
import {createRoot} from "react-dom/client"
import {RouterProvider} from "react-router-dom"
import {ToastContainer, Zoom} from "react-toastify"

import {ShopContextProvider} from "./context/shopContext"
import {router} from "./routes"

import "./index.css"

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ShopContextProvider>
            <RouterProvider router={router}></RouterProvider>
            <ToastContainer
                position="top-center"
                autoClose={800}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                limit={4}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition={Zoom}
            />
        </ShopContextProvider>
    </StrictMode>
)
