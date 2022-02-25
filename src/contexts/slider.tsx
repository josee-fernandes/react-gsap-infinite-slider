import React from 'react'

interface ISliderContext {
   showcaseWidth: number
   setShowcaseWidth: React.Dispatch<React.SetStateAction<number>>
   count: number
   setCount: React.Dispatch<React.SetStateAction<number>>
}

export const SliderContext = React.createContext({} as ISliderContext)

export const SliderContextProvider: React.FC = ({ children }) => {
   const [showcaseWidth, setShowcaseWidth] = React.useState(0)
   const [count, setCount] = React.useState(0)

   const contextValues = {
      showcaseWidth,
      setShowcaseWidth,
      count,
      setCount
   }

   return (
      <SliderContext.Provider value={contextValues}>
         {children}         
      </SliderContext.Provider>
   )
}