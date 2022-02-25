import styled from 'styled-components'

import {
   black,
   white,
   pink,
   pink1,
   darkgrey,
   lightgrey,
   light1,
   gridColumns,
   space
} from '../../styles'

interface ICollectionWrapper {
   width: number
}

export const CollectionWrapper = styled.div<ICollectionWrapper>`
   display: flex;
   overflow: hidden;
   align-items: flex-end;
   height: 600px;
   width: ${props => props.width ? `${props.width}px` : 'initial'};
`

interface ICollectionFigure {
   index: number
}

export const CollectionFigure = styled.figure<ICollectionFigure>`
   overflow: hidden;
   width: 30rem;
   height: ${`${600 - 3 * 25}px`};
   /* height: 45rem; */
   border-radius: .5rem;
   border-top-right-radius: 3.5rem;
   margin: 0 2rem;
   position: relative;
   box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, .1);

   transform: ${props => `translate(0, -${25 * props.index}px)`};
   opacity: 0;
   visibility: hidden;
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

export const CollectionActions = styled.div`
   margin: 20px 2rem;
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
