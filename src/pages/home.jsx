import React, {useEffect, useState, useContext} from "react";
import PokemonCard from "../components/pokemonCard/pokemons";
import { Container } from "@mui/system";
import Nav from '../components/Navbar/index'
import { Grid } from "@mui/material";
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components'
import { ThemeContext } from '../context/theme'

const Home = ({setPokemonData}) => {
    const [pokemons, setPokemons] = useState ([]);
    const [allPokemons, setAllPokemons] = useState([]);
    const [offset, setOffset] = useState(0);
    const [displayCount, setDisplayCount] = useState(10);

    const limit = 10;

    const navigate = useNavigate()

    useEffect(() => {
        getPokemons();
    }, []);

    const getPokemons = () => {
        var endpoints = [];
        for (let i = offset + 1; i <= offset + limit; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    }
    axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((responses) => {
        const newPokemons = responses.map(r => r.data);

        setPokemons((prevPokemons) => {
            const updatedPokemons = [...prevPokemons];
            newPokemons.forEach(pokemon => {
                if (!updatedPokemons.some(p => p.id === pokemon.id)) {
                    updatedPokemons.push(pokemon);
                }
            });
            return updatedPokemons;
        });

        setAllPokemons((prevAllPokemons) => {
            const updatedAllPokemons = [...prevAllPokemons];
            newPokemons.forEach(pokemon => {
                if (!updatedAllPokemons.some(p => p.id === pokemon.id)) {
                    updatedAllPokemons.push(pokemon);
                }
            });
            return updatedAllPokemons;
        });

                setOffset((prevOffset) => prevOffset + limit);
                setDisplayCount((prevDisplayCount) => prevDisplayCount + limit);
            })
            .catch((error) => console.error('Não foi possivel carregar Pokémon:', error));
    };

    const reducePokemonDisplay = () => {
        setDisplayCount((prevDisplayCount) => Math.max(prevDisplayCount - limit, 10));
    };

const pokemonFilter = (name) => {
    if (name === "") {
      setPokemons(allPokemons.slice(0, displayCount));
    } else{
        const filteredPokemon = allPokemons.filter((pokemon) =>
            pokemon.name.includes(name.toLowerCase())
        );
        if (filteredPokemon.length === 0) {

            axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
                .then((response) => {
                    setPokemons([response.data]);
                })
                .catch((error) => console.error('Não foi possivel carregar Pokémon:', error));
        } else {
            setPokemons(filteredPokemon.slice(0, displayCount));
            }
        }

    };

    const showPokemon = (pokemonData) => {
        setPokemonData(pokemonData);
        navigate("/profile")
    }

    const {theme} = useContext(ThemeContext)

    return (
     <>
        <ThemeProvider theme={theme}>
            <Nav pokemonFilter={pokemonFilter}/>
            <Container maxWidth="false">
                <Grid container spacing={3}>
                    {pokemons.slice(0, displayCount).map((pokemon, key) => (
                    <Grid item xs={3} onClick={() => showPokemon(pokemon)} key={pokemon.id}>
                        <PokemonCard 
                                 name={pokemon.name}
                                 image={pokemon.sprites.front_default}
                                 types= {pokemon.types}
                                 key={key}/>
                     </Grid>
                ))}
                </Grid>
            </Container>
            <Div>
                 <Button onClick={getPokemons}>Carregar + Pokémons</Button>
                 <Button onClick={reducePokemonDisplay} disabled={displayCount <= 10}>Mostrar - Pokémons</Button>
            </Div>
            
        </ThemeProvider>
     </>
    );
};

export default Home

export const Div = styled.div`

    margin-top: 20px;
    display: flex;
    justify-content: center;
    gap: 15px;
    height: 300px;   
`

export const Button = styled.button`

    border-radius: 10px;
    font-weight: bold;
    height: 80px;
    width: 150px;
    background:#8B0000;
    color: white;
    border:none;
    position:relative;
    font-size:1.1em;
    padding:0 2em;
    cursor:pointer;
    transition:800ms ease all;
    outline:none;

    &:hover{
    background:#ff0000;
    color:#faf8f8;
    }
    
`