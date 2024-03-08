import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk(
    "pokemon/fetchData",
    async () => {
        // const response = await fetch(`https://pokebuildapi.fr/api/v1/pokemon`)
        const response = await fetch('http://localhost:3000/api/pokemon')
        return response.json()
    }
)


const pokemonSlice = createSlice({
    name:"pokemon",
    initialState:{
        pokemons : null,
        isLoading: null,
        error: null,
        dataCarousel: [],
        spritePre : [],
        spriteEvol : [],
        pokemon :[],
        pokemonAfficher : null,
        searchPokemon : null,
        typeData : null,
        typePokemon : "all"
    },
    reducers:{
        setSpritePre: (state, action) => {
            state.spritePre = action.payload
        },
        setSpriteEvol: (state, action) => {
            state.spriteEvol = action.payload
        },
        setPokemonAfficher: (state, action) => {
            state.pokemonAfficher = action.payload
        },
        filter: (state, action) => {
            let filterList = state.searchPokemon.filter((item) => item.name.toLowerCase().includes(action.payload.toLowerCase()))
            state.pokemons = filterList
        },
        typePokemon: (state, action) => {
            if (action.payload === "all") {
                state.pokemons = state.searchPokemon
            } else {
                state.pokemons = state.searchPokemon.filter((item) => item.apiTypes.find((type) => type.name === action.payload))
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.isLoading = false
            if (state.pokemons) {
                for (let i = 0; i < 5; i++) {
                    const random = Math.floor(Math.random() * 100)
                    state.dataCarousel.push(state.pokemons[random])
                }
            }
            state.pokemons = action.payload
            state.searchPokemon = action.payload
            state.typeData = action.payload[0].apiResistances.map((item) => {
                return item.name
            })
        })
        builder.addCase(fetchData.rejected, (state, action) => {
            console.log("error")
            state.isLoading = false
            state.error = action.error
        })
    }
    
})


export const { setSpritePre, setSpriteEvol , setPokemonAfficher , filter , typePokemon} = pokemonSlice.actions
export default pokemonSlice.reducer