import React from 'react'

interface IShowcaseContext {
   showcaseWidth: number
   setShowcaseWidth: React.Dispatch<React.SetStateAction<number>>
}

export const ShowcaseContext = React.createContext({} as IShowcaseContext)

export const ShowcaseContextProvider: React.FC = ({ children }) => {
   const [showcaseWidth, setShowcaseWidth] = React.useState(0)

   const contextValues = { showcaseWidth, setShowcaseWidth }

   return (
      <ShowcaseContext.Provider value={contextValues}>
         {children}         
      </ShowcaseContext.Provider>
   )
}