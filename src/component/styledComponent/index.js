import React, { useState } from 'react';
import { Wrapper } from './style'
import { ThemeProvider } from 'styled-components';
import { lightColor, darkColor,GlobalStyles, themes } from '../Theme/theme.js'
const Styled = () => {
    const [theme, setTheme] = useState("light");
    const ThemeToggle = () => {
        theme === "light" ? setTheme('dark') : setTheme('light')
    }
    
    return (
        <>
            <ThemeProvider theme={theme === "light" ? lightColor : darkColor} >
            <Wrapper themes={themes}>
                <GlobalStyles/>
                <button onClick={()=>ThemeToggle()}>Change Theme</button>
            </Wrapper>
            </ThemeProvider>
        </>
    );
}

export default Styled;