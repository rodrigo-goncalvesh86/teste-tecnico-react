import React, { useContext } from 'react'
import { ThemeContext, themes } from '../../context/theme'
import styled, { ThemeProvider } from "styled-components";

export const ThemeTogglerButton = (props) => {

    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <ThemeProvider theme={theme}>
            <ButtonToggler {...props}>
                <input type='checkbox' onClick={() => {
                    setTheme(theme === themes.light ? themes.dark : themes.light);}}/>
                <span className='slider round'/>
            </ButtonToggler>
        </ThemeProvider>
    )
}

export const ButtonToggler = styled.label`
  position: relative;
  display: flex;
  width: 90px;
  height: 34px;
   
  input {
  opacity: 0;
  width: 0;
  height: 0;
    
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .8s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #000000;
}

input:focus + .slider {
  box-shadow: 0 0 1px #ca085f;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

  .slider.round {
  border-radius: 34px;
  &::before {
  border-radius: 50%;
}
`

export default ThemeTogglerButton 