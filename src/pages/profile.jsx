import { useEffect, useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/index";
import {typeHandler} from "../type-handler/types"
import axios from "axios";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { ThemeContext } from "../context/theme";


  const Profile = ({ pokemonData }) => {
  const [ abilitiesDetails, setAbilitiesDetails ] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!pokemonData) {
        navigate("/");
    } else {
        fetchAbilitiesDetails(pokemonData.abilities);
    }
}, [pokemonData, navigate]);

const fetchAbilitiesDetails = async (abilities) => {
    const abilitiesPromises = abilities.map((abilityData) =>
        axios.get(abilityData.ability.url)
    );
    try {
        const abilitiesResponses = await Promise.all(abilitiesPromises);
        const abilitiesDetails = abilitiesResponses.map((response) => response.data);
        setAbilitiesDetails(abilitiesDetails);
    } catch (error) {
        console.error("Erro ao buscar detalhes das habilidades:", error);
    }
};

if (!pokemonData) {
  return null;
}
const { theme } = useContext(ThemeContext)

  return (
    <>
            <ThemeProvider theme={theme}/>
            <GlobalStyle />
            <Navbar hideSearch noBackground />
            <ThemeProvider theme={theme}>
            
            <Main>
                <Showcase>
                    <Card>
                        <Image src={pokemonData.sprites.front_default} alt={pokemonData.name} />
                        <div>
                            <h1>{pokemonData.name.toUpperCase()}</h1>
                            <p>{typeHandler(pokemonData.types)}</p>
                        </div>
                    </Card>
                    <Skills>
                        <h2>HABILIDADES</h2>
                        {abilitiesDetails.map((ability, i) => (
                            <div key={i}>
                                <h3>{ability.name.toUpperCase()}</h3>
                                <p>{ability.effect_entries.find(entry => entry.language.name === "en").effect}</p>
                            </div>
                        ))}
                    </Skills>
                </Showcase>
                
                <Moves>
                    <h2>ATAQUES</h2>
                    <Move>
                        {pokemonData.moves.map((moveData, i) => (
                            <div key={i}>
                                <h4>{moveData.move.name}</h4>
                            </div>
                        ))}
                    </Move>
                </Moves>
            </Main >
            </ThemeProvider>
        </>
    );
};


export const GlobalStyle = createGlobalStyle`
   * {
        font-family: 'Arial', sans-serif;
        color:#eeeeee;
        font-weight: 600;
        
    }
    
   html{
    background-image: url(../assets/pokemon-ue.jpeg);
    background-repeat: no-repeat;
    background-size: cover;
    color:#eeeeee;
    width: 100vw;
   }
`

export const Main = styled.main`
   
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    color: rgb(0, 0, 0);
    
    @media (max-width: 1200px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
    }
`
export const Showcase = styled.section`
    
    padding: 40px;
    border: 3px solid rgb(300, 300, 300);
    backdrop-filter: blur(7px);
    display: flex;
    margin: 20px;
    flex-direction: column;
    border-radius: 40px;

    
    @media (max-width: 500px) {
        display: flex;
        width: 570px;
    }
    @media (max-width: 400px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 430px;
    }
`

export const Card = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-around;

    h1{
        font-size: 30px;
        margin-bottom: 10px;
        font-family: "Poetsen One", sans-serif;
        font-weight: 400;
        font-style: normal;
       
    }
   
`

export const Image = styled.img`
    width: 50%;
    background-color: rgba(93, 83, 136, 0.356);
    border: 5px solid rgb(0, 0, 0);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Skills = styled.div`
    margin-top: 20px;
    
    h2{
        margin-bottom: 10px;
       
    }
    p{
        display: flex;
        flex-wrap: wrap;
        width: 500px;
        margin: 5px 10px;
        
    }
    @media (max-width: 500px) {
        p{
            width: 300px;
        }
        display: flex;
        flex-direction: column;

        font-size: 10px;
    }
    
    @media (max-width: 400px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 330px;
    }
`

export const Moves = styled.section`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    
    
    @media (max-width: 400px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 540px;
    }
`

export const Move = styled.div`
    
    max-height:1000px;
    max-width: 1500px;
    font-size: 15px;
    backdrop-filter: blur(7px);
    padding: 10px;
    border: 3px solid rgb(300, 300, 300);
    display:flex;
    flex-direction:column;
    flex-wrap: wrap;

    h4{
        font-size: 16px;
        margin: 7px;    
    }

    @media (max-width: 500px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 450px;
        max-height: 1200px;
    }
    @media (max-width: 400px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 450px;
        max-height: 1600px;
    }
`
export default Profile;