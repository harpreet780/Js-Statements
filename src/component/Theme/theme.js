import {createGlobalStyle} from 'styled-components';
export const lightColor={
    body:"#fff",
    color:"#000",
}
export const darkColor={
    body:"#000",
    color:"#fff"
}
export const themes={
    colors: {
        powderWhite: "#FFFDF9",
        persianGreen: "#06B49A",
        lightBlue: "#AFDBD2",
      },
      fonts: ["sans-serif", "Roboto"],
      fontSizes: {
        small: 14,
        medium: 18,
        large: 20,
        xlarge: 35
      },
      padding: {
        small: 5,
        medium: 10,
        large: 20,
      }
}
export const GlobalStyles = createGlobalStyle`
        body{
            background-color:${(props)=>props.theme.body}
        }
`