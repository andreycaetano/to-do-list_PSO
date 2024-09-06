import { Route, Routes } from "react-router-dom"
import { Index } from "../pages/index"

export const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Index />}/>
        </Routes>
    )
}