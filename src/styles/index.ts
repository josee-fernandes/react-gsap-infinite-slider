import styled, { createGlobalStyle } from 'styled-components'

const black = '#000'
const white = '#fff'
const pink = '#f74690'
const pink1 = '#f51274'
const darkgrey = '#333'
const lightgrey = '#929292'
const light1 = '#f5f5f5'

const gridColumns = 12
const space = '10rem'

export const GlobalStyles = createGlobalStyle`
   :root {
      --default-font: Arial, Helvetica, sans-serif;
   }

   *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
   }

   html {
      box-sizing: border-box;
      font-sise: 62.5%;
   }

   body {
      font-size: 1.6rem;
      font-family: var(--default-font);
      overscroll-behavior-y: none;
      background-color: ${light1};
   }
`

export const Main = styled.main`
   --grid-cols: ${gridColumns};
   --grid-space: ${space};
   display: grid;
   overflow: hidden;
   grid-template-columns:
      [space-left-start] minmax(var(--grid-space), 1fr) [space-left-end main-start]
      repeat(var(--grid-cols), [col-start] 1fr [col-end])
      [main-end space-right-start] minmax(var(--grid-space), 1fr) [space-right-end];
   
   & > * {
      grid-column-start: main-start;
      grid-column-end: main-end;
   }
`

export const Header = styled.header`
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 10rem;
`

export const Logo = styled.div`
   font-size: 1.8rem;
   text-transform: uppercase;
   font-weight: 600;
`

export const Nav = styled.ul`
   list-style: none;
   display: flex;
   justify-items: center;
`

export const NavItem = styled.li`
   padding: 0.5rem 2rem;
`

export const NavLink = styled.a`
   text-decoration: none;
   font-weight: 500;
   color: ${darkgrey};
`




export const Content = styled.div``

export const SectionIntro = styled.div``

export const TitleSmall = styled.div``

export const TitleBig = styled.div``

export const IntroText = styled.div``

export const Button = styled.button``

export const Showcase = styled.div``




export const Bottom = styled.div``

export const BottomLeft = styled.div``

export const Count = styled.div``

export const LineWrapper = styled.div``

export const Line = styled.div``

export const Description = styled.div``

export const BottomRight = styled.div``