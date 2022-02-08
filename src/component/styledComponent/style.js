import styled from 'styled-components'

export const Wrapper = styled.div`
  button{
      font-size: ${(props) => `${props.themes.fontSizes.small + 2}px`};
      display: block;
      margin: auto;
      background:transparent;
      padding: ${(props) => `${props.themes.padding.small}px`};
      border: ${(props) => `1px solid ${props.theme.color}`};
      color: ${(props) => props.theme.color};
  }
`