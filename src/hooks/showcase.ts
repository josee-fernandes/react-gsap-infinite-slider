import React from 'react'

import { ShowcaseContext } from '../contexts/showcase'

export const useShowcase = () => {
   const { showcaseWidth, setShowcaseWidth } = React.useContext(ShowcaseContext)

   return { showcaseWidth, setShowcaseWidth }
}