import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./features/pokemon/pokemonSlice";
import loginReducer from "./features/login/loginSlice";
import panierReducer from "./features/panier/panier"
import darkReducer from "./features/darkMode/darkSlice"
export const store = configureStore({
    reducer: {
        pokemon: pokemonReducer,
        login: loginReducer,
        panier: panierReducer,
        dark: darkReducer
    }
})