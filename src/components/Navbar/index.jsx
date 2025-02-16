import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import ThemeTogglerButton from "../theme-toggler/theme-toggler";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/theme"
import { useContext } from "react"
import { ThemeProvider } from 'styled-components'


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Nav({pokemonFilter, hideSearch}) {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 2, marginBottom: '2em' }}>
      <AppBar position="static" >
        <Toolbar >
        {!hideSearch ? (
          <>
        <p>trocar tema</p>
            <ThemeTogglerButton />
            <Box display="flex" justifyContent="space-between" width="100%"/>
              <Box component="img" src="/assets/pokemon_logo.png" height="5em"
                                                sx={{ cursor: "pointer" }} onClick={() => navigate("/")}/>
                <Search onChange={(e) => pokemonFilter(e.target.value)}>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Pesquisar"
                    inputProps={{ 'aria-label': 'search' }}/>
                  </Search>
                  </>
                  ) : null}
          </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
  );
}
