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




export const Content = styled.div`
   display: grid;
   grid-template-columns: 45rem 1fr;
   grid-column-gap: 3rem;
   height: auto;
   position: relative;
   align-items: center;
`

export const SectionIntro = styled.div`
   grid-column-end: 2;
   display: grid;
   grid-row-gap: 2rem;
   grid-template-rows: repeat(4, min-content);
`

export const TitleSmall = styled.div`
   text-transform: uppercase;
   font-weight: 600;
   color: ${pink};
`

export const TitleBig = styled.div`
   text-transform: uppercase;
   font-weight: 600;
   color: ${darkgrey};
   font-size: 2.5rem;
`

export const IntroText = styled.div`
   font-size: 2.5rem;
   line-height: 1.6;
   color: ${lightgrey};
`

export const Button = styled.button`
   display: inline-block;
   outline: none;
   border: none;
   width: fit-content;
   color: ${white};
   background-color: ${pink};
   padding: 1.5rem 2.5rem;
   border-radius: .7rem;
   text-transform: capitalize;
`

export const Showcase = styled.div`
   grid-column: 2 / -1;
   align-self: center;
   overflow: hidden;
`

export const CollectionActions = styled.div`
   margin: 20px;
   display: flex;
   align-items: center;
`

export const ActionButton = styled.button`
   display: inline-block;
   outline: none;
   border: none;
   cursor: pointer;
   color: ${white};
   background-color: ${pink};
   width: 50px;
   height: 50px;
   border-radius: 50%;
   text-transform: capitalize;
   transition: all 0.1s ease-in-out;

   & > * {
      fill: ${white};
      width: 30px;
      height: 30px;
   }

   &:hover {
      transform: scale(1.1)
   }

   &:active {
      transform: scale(1)
   }
`

export const Progress = styled.div`
   margin-left: 2rem;
   position: relative;
   height: .7rem;
   width: 20rem;
   overflow: hidden;
   border-radius: 3px;
   background-color: ${white};
`

export const ProgressLine = styled.div`
   width: 0;
   height: inherit;
   background-color: ${pink1};
`


export const Collection = styled.div`
   display: flex;
   overflow: hidden;
   align-items: flex-end;
   height: 600px;
`

export const CollectionImage = styled.img`
   overflow: hidden;
   width: 30rem;
   height: 45rem;
   border-radiuss: .5rem;
   border-top-right-radius: 3.5rem;
   margin: 0 2rem;
   position: relative;
   box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, .1);
`

interface IOverlay {
   active: boolean
}

export const Overlay = styled.div<IOverlay>`
   position: absolute;
   left: 0;
   top: ${props => props.active ? '70%' : '-100%'};
   right: 0;
   bottom: 0;
   width: 100%;
   height: 100%;
   z-index: 1;
   background-color: rgb(39 39 39 / 40%);
   transition: all .6s .2s cubic-bezier(0.65, 0, 0.35, 1);
`

export const OverlayImage = styled.img`
   width: 100%;
   height: 100%;
   display: block;
   object-fit: cover;
`

export const FigureInfo = styled.div`
   position: absolute;
   left: 0;
   top: 70%;
   right: inherit;
   bottom: 0;
   z-index: 100;
   display: flex;
   align-items: center;
   justify-content: space-around;
   font-size: 3rem;
`

interface IFigureCount {
   active: boolean
}

export const FigureCount = styled.div<IFigureCount>`
   text-align: center;
   flex: 0 0 20%;
   opacity: ${props => props.active ? 1 : 0};
   color: ${white};
   z-index: 10;
   transition: all .4s .2s cubic-bezier(0.65, 0, 0.35, 1);
`

interface IFigureLine {
   active: boolean
}

export const FigureLine = styled.div<IFigureLine>`
   position: absolute;
   background-color: ${white};
   width: 1px;
   height: ${props => props.active ? '75%' : '0'};
   left: 35%;
   top: 50%;
   color: ${white};
   transform: translate(-50%, -50%);
   z-index: 10;
   transition: all .4s .2s cubic-bezier(0.65, 0, 0.35, 1);
`

interface IFigureAuthor {
   active: boolean
}

export const FigureAuthor = styled.div<IFigureAuthor>`
   font-size: 2rem;
   flex: 0 0 50%;
   text-align: center;
   opacity: ${props => props.active ? 1 : 0};
   color: ${white};
   z-index: 10;
   transition: all .4s .2s cubic-bezier(0.65, 0, 0.35, 1);
`


export const Bottom = styled.div`
   display: grid;
   grid-template-columns: 45rem 1fr;
   grid-column: main-start / -1;
   overflow: hidden;
   border-top-left-radius: 40px;
   margin: 0 0 0 3rem;
   /* height: calc(100vh - 79rem); */
`

export const BottomLeft = styled.div`
   color: ${white};
   display: flex;
   align-items: center;
   padding: 30px;
   background-color: #3c2d53;
`

export const Count = styled.div`
   font-size: 6rem;
   flex: 0 0 7rem;
`

export const LineWrapper = styled.div`
   flex: 0 0 20%;
   height: 100%;
   display: flex;
   justify-content: center;
`

export const Line = styled.div`
   height: 100%;
   width: 1px;
   margin: 0 1rem;
   background-color: ${white};
`

export const Description = styled.div`
   font-family: sans-serif;
   font-weight: 300;
   font-size: 1.4rem;
   line-height: 1.7;
   color: #e2e2e2;
`

export const BottomRight = styled.div`
   background-color: rgba(147, 62, 162, 0.925);
`