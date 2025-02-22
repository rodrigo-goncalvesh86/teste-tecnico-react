import { BrowserRouter, Route, Routes } from "react-router-dom"
import Profile from "../pages/profile.jsx"
import Home from "../pages/home.jsx"
import { useState } from "react"
import { ThemeProvider } from "../context/theme.jsx"


const Router = () => {
    const [pokemonData, setPokemonData] = useState()
    return (
        <ThemeProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home setPokemonData={setPokemonData} />} />
                    <Route path="/profile" element={<Profile pokemonData={pokemonData} />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default Router