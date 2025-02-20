import {StrictMode} from "react"
import {createRoot} from "react-dom/client"
import {RouterProvider} from "react-router-dom"
import {ToastContainer} from "react-toastify"

import {MainContextProvider} from "./context/mainContext"
import {router} from "./routes"

import "./index.css"

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <MainContextProvider>
            <RouterProvider router={router}></RouterProvider>
            <ToastContainer />
        </MainContextProvider>
    </StrictMode>
)
