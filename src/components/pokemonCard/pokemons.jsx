import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import styled, { ThemeProvider } from "styled-components";
import { useContext } from "react"
import { ThemeContext } from "../../context/theme"


export default function PokemonCard({ name, image}) {

  const { theme } = useContext(ThemeContext)
  return (
    <ThemeProvider theme={theme}>
    <Card className="body" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <Container>
        <CardMedia component="img" height="200" image={image} alt="pokemon" />
        <CardContent>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography gutterBottom variant="caption" component="div">
            </Typography>
          </Box>
        </CardContent>
        </Container>
      </CardActionArea>
    </Card>
    </ThemeProvider>
  );
}

export const Container = styled.div`
    color: ${(props) => props.theme.color};
    background-color: ${(props) => props.theme.background};
`
