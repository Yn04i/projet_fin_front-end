import { createSlice } from "@reduxjs/toolkit";

export const panierSlice = createSlice({
    name:"panier",
    initialState:{
        panier : [],
    },
    reducers:{
        addPanier : (state, action) => {
            const existing = state.panier.find((item) => item.pokedexId === action.payload.pokedexId)
            if  (!existing) {
                state.panier.push(action.payload)
            }
        },
        deletePanier : (state, action) => {
            state.panier = state.panier.filter((item) => item.pokedexId !== action.payload.pokedexId)
        },
        checkout : (state) => {
            state.panier = []
        }
    }
})

export const { addPanier, deletePanier, checkout} = panierSlice.actions
export default panierSlice.reducer